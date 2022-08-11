import { price } from "../6-3-1"

describe("Order Check", () => {
  it('Should ', () => {
    const order = {
      quantity: 50,
      itemPrice: 1
    }
    expect(price(order)).toBe(55)
  })
  it('Should ', () => {
    const order = {
      quantity: 1000,
      itemPrice: 1
    }
    expect(price(order)).toBe(1075)
  })
})