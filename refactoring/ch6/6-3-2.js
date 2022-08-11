export class Order {
  #orderInfo
  constructor(orderInfo) {
    this.orderInfo = orderInfo;
  }
  get quantity() {
    return this.orderInfo.quantity;
  }
  get itemPrice() {
    return this.orderInfo.itemPrice;
  }
  get price() {
    return this.basePrice + this.shippingCost - this.quantityDiscount
  }
  get basePrice() {
    return this.quantity * this.itemPrice
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05
  }
  get shippingCost() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100)
  }
}
