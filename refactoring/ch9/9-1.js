// 예제 1
const area = height * width
let temp = 2 * area
console.log(temp);
console.log(area);

// 예제 2
function distanceTravelled(scenario, time) {
  let result;
  const { primaryForce, secondaryForce, mass, delay } = scenario
  let acc = primaryForce / mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, delay);
  result = 0.5 * acc * primaryTime * primaryTime;
  const secondaryTime = time - delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = acc * delay;
    acc = (primaryForce + secondaryForce) / mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }
}

// 예제 3
function discount(inputValue, quantity) {
  if (inputValue > 50) inputValue = inputValue - 2;
  if (quantity > 100) inputValue = inputValue - 1;
  return inputValue;
}
