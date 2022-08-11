export class Organization {
  #name
  #country
  constructor(name, country) {
    this.#name = name
    this.#country = country
  }
  get name() {
    return this.#name
  }
  set name(name) {
    this.#name = name
  }
  get country() {
    return this.#country
  }
}

