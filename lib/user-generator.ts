import { faker } from '@faker-js/faker';

// Define the structure of fields that can be generated
export interface UserFields {
  id: boolean;
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  address: boolean;
  city: boolean;
  country: boolean;
  zipCode: boolean;
  birthDate: boolean;
  age: boolean;
  username: boolean;
  password: boolean;
  avatar: boolean;
  company: boolean;
  jobTitle: boolean;
}

// Define the options for user generation
export interface GenerateOptions {
  quantity: number;
  fields: UserFields;
  gender: 'male' | 'female' | 'random';
  locale?: string; // Locale for faker data
}

// Define the structure of a generated user
export interface GeneratedUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  zipCode?: string;
  birthDate?: string;
  age?: number;
  username?: string;
  password?: string;
  avatar?: string;
  company?: string;
  jobTitle?: string;
}

// Function to generate users
export function generateUsers(options: GenerateOptions): GeneratedUser[] {
  const { quantity, fields, gender, locale } = options;

  // Set faker locale if provided
  if (locale) faker.locale = locale;

  // Generate users
  return Array.from({ length: quantity }, (): GeneratedUser => {
    const userGender = gender === 'random' ? (Math.random() > 0.5 ? 'male' : 'female') : gender;

    const user: GeneratedUser = {};

    if (fields.id) user.id = faker.string.uuid();
    if (fields.firstName) user.firstName = faker.person.firstName(userGender);
    if (fields.lastName) user.lastName = faker.person.lastName(userGender);
    if (fields.email) user.email = faker.internet.email({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
    });
    if (fields.phone) user.phone = faker.phone.number();
    if (fields.address) user.address = faker.location.streetAddress();
    if (fields.city) user.city = faker.location.city();
    if (fields.country) user.country = faker.location.country();
    if (fields.zipCode) user.zipCode = faker.location.zipCode();
    if (fields.birthDate) {
      const birthDate = faker.date.birthdate();
      user.birthDate = birthDate.toISOString().split('T')[0];
      if (fields.age) user.age = new Date().getFullYear() - birthDate.getFullYear();
    }
    if (fields.username) user.username = faker.internet.userName({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
    });
    if (fields.password) user.password = faker.internet.password();
    if (fields.avatar) user.avatar = faker.image.avatar();
    if (fields.company) user.company = faker.company.name();
    if (fields.jobTitle) user.jobTitle = faker.person.jobTitle();

    return user;
  });
}
