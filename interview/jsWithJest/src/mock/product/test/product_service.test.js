const ProductService = require('../product_service.js');
const StubProductClient = require('../test/stub_product_client');


describe('ProductService', () => {
  let productService;
  beforeEach(() => {
    productService = new ProductService(new StubProductClient);
  })
  test('Should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems()
    expect(items.length).toBe(1)
    expect(items).toEqual([{ item: '🍌', available: true }])
  })
}) 