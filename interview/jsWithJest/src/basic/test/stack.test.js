const Stack = require("../stack")


describe("Stack", () => {
  let stack
  beforeEach(() => {
    stack = new Stack()
  })
  test('Stack Push', () => {
    stack.push(5)
    stack.push(4)
    expect(stack.data).toHaveLength(2)
    expect(stack.data).toContain(5)
    expect(stack.data).toContain(4)
  })

  test('Stack Pop When item is exist', () => {
    stack.push(5)
    stack.push(4)
    expect(stack.data).toHaveLength(2)
    expect(stack.data).toContain(5)
    expect(stack.data).toContain(4)
  })

  test('Stack Pop when no item', () => {
    expect(() => {
      console.log(stack.data);
      stack.pop()
    }).toThrowError('Empty Data')
  })

  test('Stack Peek', () => {

  })
})