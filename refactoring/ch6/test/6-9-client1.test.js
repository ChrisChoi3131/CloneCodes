import { acquireReading, baseRate } from '../6-9';

describe('Reading Test', () => {
  let aReading;
  beforeEach(() => {
    aReading = acquireReading()
  })
  it('Shoue baserate be 0.1 when 2017-5 ', () => {
    const expected = 1
    expect(baseRate(aReading.month, aReading.year) * aReading.quantity).toBe(expected)
  })
})