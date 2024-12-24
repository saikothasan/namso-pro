export const NETWORKS = {
  'visa': { prefix: '4', length: 16 },
  'mastercard': { prefix: '51,52,53,54,55', length: 16 },
  'amex': { prefix: '34,37', length: 15 },
  'discover': { prefix: '6011,644,645,646,647,648,649,65', length: 16 },
  'diners': { prefix: '300,301,302,303,304,305,36,38', length: 14 },
  'jcb': { prefix: '3528,3529,353,354,355,356,357,358', length: 16 },
  'unionpay': { prefix: '62', length: 16 },
  'maestro': { prefix: '5018,5020,5038,5893,6304,6759,6761,6762,6763', length: 16 },
  'mir': { prefix: '2200,2201,2202,2203,2204', length: 16 },
  'random': { prefix: '', length: 16 },
} as const;

export const CURRENCIES = {
  'USD': { symbol: '$', name: 'United States Dollar' },
  'EUR': { symbol: '€', name: 'Euro' },
  'GBP': { symbol: '£', name: 'British Pound' },
  'JPY': { symbol: '¥', name: 'Japanese Yen' },
  'AUD': { symbol: 'A$', name: 'Australian Dollar' },
  'CAD': { symbol: 'C$', name: 'Canadian Dollar' },
  'CHF': { symbol: 'CHF', name: 'Swiss Franc' },
  'CNY': { symbol: '��', name: 'Chinese Yuan' },
  'INR': { symbol: '₹', name: 'Indian Rupee' },
} as const;

export const CARD_FORMATS = {
  'PIPE': 'Pipe (|)',
  'SPACE': 'Space',
  'DASH': 'Dash (-)',
  'NONE': 'None'
} as const;

export const BALANCE_RANGES = {
  '100-500': { min: 100, max: 500 },
  '500-1000': { min: 500, max: 1000 },
  '1000-5000': { min: 1000, max: 5000 },
  '5000-10000': { min: 5000, max: 10000 },
} as const;

export const USER_FIELDS = [
  { id: 'id', label: 'ID' },
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Phone' },
  { id: 'address', label: 'Address' },
  { id: 'city', label: 'City' },
  { id: 'country', label: 'Country' },
  { id: 'birthDate', label: 'Birth Date' },
  { id: 'username', label: 'Username' },
] as const;

