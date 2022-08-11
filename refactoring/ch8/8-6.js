// 예제 1
const [pricingPlan, order] = [retrievePricingPlan(), retreiveOrder()];
const chargePerUnit = pricingPlan.unit;

// 예제 2
function someFunc() {
  const result = availableResources.length === 0 ? createResource() : availableResources.pop();
  allocatedResources.push(result);
  return result;
}
