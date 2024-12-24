import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCardNumber(number: string, format: string = 'PIPE'): string {
  switch (format) {
    case 'PIPE':
      return number.replace(/(.{4})/g, '$1|').slice(0, -1)
    case 'SPACE':
      return number.replace(/(.{4})/g, '$1 ').trim()
    case 'DASH':
      return number.replace(/(.{4})/g, '$1-').slice(0, -1)
    default:
      return number
  }
}

export function generateRandomAmount(min: number, max: number): string {
  const amount = Math.random() * (max - min) + min
  return amount.toFixed(2)
}

export const CURRENCIES = {
  'USD': { symbol: '$', name: 'United States Dollar' },
  'EUR': { symbol: '€', name: 'Euro' },
  'GBP': { symbol: '£', name: 'British Pound' },
  'JPY': { symbol: '¥', name: 'Japanese Yen' },
  'AUD': { symbol: 'A$', name: 'Australian Dollar' },
  'CAD': { symbol: 'C$', name: 'Canadian Dollar' },
  'CHF': { symbol: 'CHF', name: 'Swiss Franc' },
  'CNY': { symbol: '¥', name: 'Chinese Yuan' },
  'INR': { symbol: '₹', name: 'Indian Rupee' },
}

export const CARD_FORMATS = {
  'PIPE': 'Pipe (|)',
  'SPACE': 'Space',
  'DASH': 'Dash (-)',
  'NONE': 'None'
}

export const BALANCE_RANGES = {
  '100-500': { min: 100, max: 500 },
  '500-1000': { min: 500, max: 1000 },
  '1000-5000': { min: 1000, max: 5000 },
  '5000-10000': { min: 5000, max: 10000 },
}

export const NETWORKS = {
  'visa': { prefix: '4', length: 16 },
  'mastercard': { prefix: '5', length: 16 },
  'amex': { prefix: '34,37', length: 15 },
  'discover': { prefix: '6011', length: 16 },
  'random': { prefix: '', length: 16 },
}

