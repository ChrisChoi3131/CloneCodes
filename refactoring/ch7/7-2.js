export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }
  get name() {
    return this.#name;
  }
  get courses() {
    return [...this.#courses];
  }
  addCourse(course) {
    this.#courses.push(course)
  }
}
export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }
  get name() {
    return this.#name;
  }
  get isAdvanced() {
    return this.#isAdvanced;
  }
}
const ellie = new Person('엘리');
const course = new Course('리팩토링', true)
ellie.addCourse(course);
console.log(ellie.courses.length);
