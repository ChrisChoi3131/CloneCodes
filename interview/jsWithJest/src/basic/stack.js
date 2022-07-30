class Stack {
  constructor() {
    this.data = []
  }
  push(item) {
    this.data.push(item)
  }
  pop() {
    if (this.data.length === 0) throw new Error('Empty Data')
    return this.data.pop()
  }
  peek() {
    if (!this.data.length) return new Error('Empty Data')
    return this.data[this.data.length - 1]
  }
  isEmpty() {
    if (this.data.length) return false
    else return true
  }
}

module.exports = Stack