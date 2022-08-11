import { circumference } from '../6-5-1';

describe('Calculate circumference', () => {
  const radius = 2
  const expected = 2 * Math.PI * radius
  it('Should calculate circumference given a radius ', () => {
    expect(circumference(radius)).toBe(expected)
  })
})