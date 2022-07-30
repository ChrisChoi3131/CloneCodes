class ProductClient {
  async fetchItems() {
    return [
      { item: '🍌', available: true },
      { item: '🥛', available: false }
    ]
  }
}

module.exports = ProductClient;
