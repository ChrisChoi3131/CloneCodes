export function reportYoungestAgeAndTotalSalary(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = people.reduce((total, c) => total += c.salary);
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }
  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}
