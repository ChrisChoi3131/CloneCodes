const Calculator = require('../calculator');


describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator()
  });
  test('set num 10', (num = 10) => {
    calculator.set(num)
    expect(calculator.value).toBe(num)
    calculator.clear()
  })

  test('adds 1 + 2 to equal 3', () => {
    const result = 3
    calculator.set(1)
    calculator.add(2)
    expect(calculator.value).toBe(result);
    calculator.clear()
  })

  test('clear', () => {
    calculator.clear()
    expect(calculator.value).toBe(0);
  })

  test('set after clear', () => {
    calculator.set(10)
    calculator.clear()
    expect(calculator.value).toBe(0);
  })
  test('subtract 10 -5 = 5', () => {
    const result = 5
    calculator.set(10)
    calculator.subtract(5)
    expect(calculator.value).toBe(5)
  })
})
