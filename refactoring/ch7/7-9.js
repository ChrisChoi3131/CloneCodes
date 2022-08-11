export function foundPerson(people) {
  const wantedFindPerson = ['Don', 'John', 'Kent']
  return people.find(p => wantedFindPerson.includes(p)) || ""

}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));


console.log([1, 2, 3, 4, 5].find(number => number > 3));