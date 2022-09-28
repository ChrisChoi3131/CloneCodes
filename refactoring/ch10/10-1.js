function calculateCharge(date, quantity, plan) {
  return isSummer ? summerCharge() : regularCharge();
  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
  function summerCharge() {
    return quantity * plan.summerRate;
  }
  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd)
  }
}
