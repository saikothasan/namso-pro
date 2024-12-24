import { NETWORKS, CURRENCIES, BALANCE_RANGES } from './constants'

function generateLuhnNumber(partial: string): string {
  let sum = 0;
  let isEven = false;

  for (let i = partial.length - 1; i >= 0; i--) {
    let digit = parseInt(partial[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  const checkDigit = (10 - (sum % 10)) % 10;
  return partial + checkDigit.toString();
}

export function generateCard(
  bin: string = '',
  network: keyof typeof NETWORKS = 'random'
): string {
  let cardNumber = bin;

  if (!cardNumber) {
    if (network === 'random') {
      const networks = Object.keys(NETWORKS).filter(n => n !== 'random');
      network = networks[Math.floor(Math.random() * networks.length)] as keyof typeof NETWORKS;
    }
    const prefixes = NETWORKS[network].prefix.split(',');
    cardNumber = prefixes[Math.floor(Math.random() * prefixes.length)];
  }

  const length = NETWORKS[network].length;
  while (cardNumber.length < length - 1) {
    cardNumber += Math.floor(Math.random() * 10).toString();
  }

  return generateLuhnNumber(cardNumber);
}

export function generateRandomDate(): { month: string; year: string } {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  
  let randomYear = currentYear + Math.floor(Math.random() * 5);
  let randomMonth = Math.floor(Math.random() * 12) + 1;
  
  if (randomYear === currentYear && randomMonth <= currentMonth) {
    randomMonth = currentMonth + 1 + Math.floor(Math.random() * (12 - currentMonth));
  }

  return {
    month: randomMonth.toString().padStart(2, '0'),
    year: randomYear.toString().slice(-2)
  };
}

export function generateCVV(isAmex: boolean = false): string {
  const min = isAmex ? 1000 : 100;
  const max = isAmex ? 9999 : 999;
  return Math.floor(Math.random() * (max - min + 1) + min).toString();
}

export function generateBalance(currency: string, balanceRange: string): string {
  const { min, max } = BALANCE_RANGES[balanceRange as keyof typeof BALANCE_RANGES];
  const balance = (Math.random() * (max - min) + min).toFixed(2);
  return `${CURRENCIES[currency as keyof typeof CURRENCIES].symbol}${balance}`;
}

export interface GenerateOptions {
  bin?: string;
  network: keyof typeof NETWORKS;
  quantity: number;
  includeDates: boolean;
  includeCVV: boolean;
  includeBalance: boolean;
  currency: string;
  balanceRange: string;
  format: string;
}

export function generateCards(options: GenerateOptions): string[] {
  const cards: string[] = [];

  for (let i = 0; i < options.quantity; i++) {
    const cardNumber = generateCard(options.bin, options.network);
    const { month, year } = generateRandomDate();
    const cvv = generateCVV(options.network === 'amex');
    const balance = options.includeBalance ? generateBalance(options.currency, options.balanceRange) : '';
    
    let cardInfo = [cardNumber];
    if (options.includeDates) cardInfo.push(month, year);
    if (options.includeCVV) cardInfo.push(cvv);
    if (options.includeBalance) cardInfo.push(balance);
    
    cards.push(cardInfo.join('|'));
  }

  return cards;
}

