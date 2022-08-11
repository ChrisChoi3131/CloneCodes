const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export class Reading {
  #customer
  #quantity
  #month
  #year
  constructor({ customer, quantity, month, year }) {
    this.#customer = customer
    this.#quantity = quantity
    this.#month = month
    this.#year = year
  }
  get reading() {
    return { customer: this.#customer, quantity: this.#quantity, month: this.#month, year: this.#year }
  }
  baseRate() {
    return this.#year === 2017 && this.#month === 5 ? 0.1 : 0.2
  }
  baseCharge() {
    return this.baseRate() * this.#quantity
  }
}

export function acquireReading() {
  return reading;
}
export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}


let c = []
const a = { test: 1, c }
const b = { ...a }
b.test = 3
console.log(a === b);
