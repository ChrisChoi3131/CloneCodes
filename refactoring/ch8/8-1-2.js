export class Account {
  #daysOverdrawn;
  #type
  constructor(accountType, daysOverdrawn) {
    this.#type = accountType;
    this.#daysOverdrawn = daysOverdrawn;
  }
  get bankCharge() {
    let result = 4.5;
    if (this.#daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    if (this.isPremium) {
      const baseCharge = 10;
      if (this.#daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (this.#daysOverdrawn - 7) * 0.85;
    } else return this.#daysOverdrawn * 1.75;
  }
  get isPremium() {
    return this.#type === 'Premium';
  }
  get daysOverdrawn() {
    return this.#daysOverdrawn;
  }
}
