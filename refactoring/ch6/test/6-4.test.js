import { isDeliveryFree } from '../6-4';

describe('Check Free Delivery', () => {
  it('Should have free delivery for order price > $1,000 ', () => {
    const anOrderBasePrice1500 = {
      basePrice: 1500
    }
    expect(isDeliveryFree(anOrderBasePrice1500)).toBe(true)
  })

  it('Should not have free delivery for order price<=$1,000 ', () => {
    const anOrderBasePrice1000 = {
      basePrice: 1000
    }
    const anOrderBasePrice900 = {
      basePrice: 900
    }
    expect(isDeliveryFree(anOrderBasePrice1000)).toBe(false)
    expect(isDeliveryFree(anOrderBasePrice900)).toBe(false)

  })

})