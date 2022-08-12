class Organization {
  #name;
  #country;
  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
  get country() {
    return this.#country;
  }



  set country(value) {
    this.#country = value;
  }
}
const organization = new Organization({
  name: '드림코딩',
  country: '대한민국',
});
