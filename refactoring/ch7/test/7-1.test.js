import { Organization } from '../7-1';

describe("Organization Test", () => {
  test('Should same value in Object', () => {
    const organization = new Organization('Dream Coding', 'GB')
    organization.name = 'Dream Coding'
    const expectedName = 'Dream Coding'
    expect(organization.name).toBe(expectedName)
  })
})