import { allFakers, allLocales } from '@faker-js/faker';

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

export interface GenerateOptions {
  quantity: number;
  fields: UserFields;
  gender: 'male' | 'female' | 'random';
  country: string | null; // Use locale strings such as 'en', 'fr', etc.
}

export function generateUsers(options: GenerateOptions) {
  const { quantity, fields, gender, country } = options;

  // Set faker locale dynamically, fallback to 'en' if locale is invalid
  const fakerInstance = baseFaker.localize({
    ...locales,
    default: country && locales[country] ? country : 'en',
  });

  return Array.from({ length: quantity }, () => {
    const userGender = gender === 'random' ? (Math.random() > 0.5 ? 'male' : 'female') : gender;

    const user: any = {};

    if (fields.id) user.id = fakerInstance.string.uuid();
    if (fields.firstName) user.firstName = fakerInstance.person.firstName(userGender);
    if (fields.lastName) user.lastName = fakerInstance.person.lastName(userGender);
    if (fields.email) user.email = fakerInstance.internet.email({ firstName: user.firstName, lastName: user.lastName });
    if (fields.phone) user.phone = fakerInstance.phone.number();
    if (fields.address) user.address = fakerInstance.location.streetAddress();
    if (fields.city) user.city = fakerInstance.location.city();
    if (fields.country) user.country = fakerInstance.location.country();
    if (fields.zipCode) user.zipCode = fakerInstance.location.zipCode();
    if (fields.birthDate) {
      const birthDate = fakerInstance.date.birthdate();
      user.birthDate = birthDate.toISOString().split('T')[0];
      if (fields.age) user.age = new Date().getFullYear() - birthDate.getFullYear();
    }
    if (fields.username) user.username = fakerInstance.internet.userName({ firstName: user.firstName, lastName: user.lastName });
    if (fields.password) user.password = fakerInstance.internet.password();
    if (fields.avatar) user.avatar = fakerInstance.image.avatar();
    if (fields.company) user.company = fakerInstance.company.name();
    if (fields.jobTitle) user.jobTitle = fakerInstance.person.jobTitle();

    return user;
  });
}
