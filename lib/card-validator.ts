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
  const patterns = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    discover: /^6(?:011|5)/,
    dinersclub: /^3(?:0[0-5]|[68])/,
    jcb: /^(?:2131|1800|35)/
  };

  for (const [type, pattern] of Object.entries(patterns)) {
    if (pattern.test(number)) {
      return type;
    }
  }

  return null;
}

