class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelePhoneNumber(areaCode, number)
  }
  get name() {
    return this.#name;
  }
  set name(arg) {
    this.#name = arg;
  }
  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }
  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }
  get officeNumber() {
    return this.#telephoneNumber.number;
  }
}
class TelePhoneNumber {
  #areaCode;
  #number
  constructor(areaCode, number) {
    this.#areaCode = areaCode
    this.#number = number
  }
  get telephoneNumber() {
    return `(${this.areaCode}) ${this.number}`;
  }
  get areaCode() {
    return this.#areaCode;
  }
  set areaCode(arg) {
    this.#areaCode = arg;
  }
  get number() {
    return this.#number;
  }
  set number(arg) {
    this.#number = arg;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
