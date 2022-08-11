class Order {
  #quantity;
  #item;
  #basePrice;
  #discountFactor
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
    this.#basePrice = this.#quantity * this.#item.price;
    this.#discountFactor = basePrice > 1000 ? 0.95 : 0.98
  }
  get price() {
    return this.#basePrice * this.#discountFactor;
  }
}
