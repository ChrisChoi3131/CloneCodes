export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = getDiscount(quantity, product);
  const shippingCost = getShippingCost(quantity, basePrice, shippingMethod);
  return getPrice(basePrice, discount, shippingCost);
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};
const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};


function getPrice(basePrice, discount, shippingCost) {
  return basePrice - discount + shippingCost;
}
function getShippingCost(quantity, basePrice, shippingMethod) {
  return quantity * getShippingPerCase(basePrice, shippingMethod);
}
function getShippingPerCase(basePrice, shippingMethod) {
  return basePrice > shippingMethod.discountThreshold
    ? shippingMethod.discountedFee
    : shippingMethod.feePerCase;
}
function getDiscount(quantity, product) {
  return Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
}
const price = priceOrder(product, 5, shippingMethod);
console.log(price);

