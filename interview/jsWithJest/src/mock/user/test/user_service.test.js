const UserService = require('../user_service');
const StubUserClient = require('../test/stub_user_client');

describe('User service test', () => {
  let userService
  beforeEach(() => {
    userService = new UserService(new StubUserClient)
  })
  it('Login Test', async () => {
    const [id, password] = ["dfdfd", "dfdfdfdf"]
    const data = await userService.login(id, password)
    expect(userService.isLogedIn).toBe(true)
  })
})
