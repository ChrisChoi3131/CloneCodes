import { Order } from "../6-3-2"

describe('Create Order', () => {
  it('Order quantity above 500', () => {
    const orderInfo = {
      quantity: 600,
      itemPrice: 1
    }
    const order = new Order(orderInfo)
    expect(order.price).toBe(655)
  })
  it('Order quantity under 500', () => {
    const orderInfo = {
      quantity: 300,
      itemPrice: 1
    }
    const order = new Order(orderInfo)
    expect(order.price).toBe(330)
  })
})