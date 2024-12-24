import { faker } from '@faker-js/faker'

export interface UserFields {
  id: boolean
  firstName: boolean
  lastName: boolean
  email: boolean
  phone: boolean
  address: boolean
  city: boolean
  country: boolean
  birthDate: boolean
  username: boolean
}

export interface GenerateOptions {
  quantity: number
  fields: UserFields
}

export function generateUsers(options: GenerateOptions) {
  const { quantity, fields } = options

  return Array.from({ length: quantity }, () => {
    const user: Record<string, any> = {}
    
    if (fields.id) user.id = faker.string.uuid()
    if (fields.firstName) user.firstName = faker.person.firstName()
    if (fields.lastName) user.lastName = faker.person.lastName()
    if (fields.email) user.email = faker.internet.email({ firstName: user.firstName, lastName: user.lastName })
    if (fields.phone) user.phone = faker.phone.number()
    if (fields.address) user.address = faker.location.streetAddress()
    if (fields.city) user.city = faker.location.city()
    if (fields.country) user.country = faker.location.country()
    if (fields.birthDate) user.birthDate = faker.date.past().toISOString().split('T')[0]
    if (fields.username) user.username = faker.internet.userName()
    
    return user
  })
}

