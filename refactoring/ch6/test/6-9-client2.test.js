import { taxableCharge } from '../6-9-client2';

describe('Reading Test', () => {
  it('Shoue taxThreshold be 0.9 ', () => {
    const expected = 0.9
    expect(taxableCharge).toBe(expected)
  })
})