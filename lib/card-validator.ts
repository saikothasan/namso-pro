import { NETWORKS } from './constants'

export function validateCard(number: string): boolean {
  let sum = 0;
  let isEven = false;

  // Loop through values starting from the rightmost digit
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

export function getCardType(number: string): string | null {
  for (const [network, details] of Object.entries(NETWORKS)) {
    if (network === 'random') continue;
    const prefixes = details.prefix.split(',');
    if (prefixes.some(prefix => number.startsWith(prefix))) {
      return network;
    }
  }

  return null;
}

