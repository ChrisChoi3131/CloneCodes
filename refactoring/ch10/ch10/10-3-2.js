export function adjustedCapital(instrument) {
  if (!isEligibleForAdjustedCapital(instrument)) {
    return 0;
  }
  return (
    (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
  );
}

function isEligibleForAdjustedCapital(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  );
}