const check = require('../check');

describe('check', () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn()
    onFail = jest.fn()
  })
  test('Should call onSuccess when predicate is true', () => {
    check(() => true, onSuccess, onFail)
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith('yes');
    expect(onFail).toHaveBeenCalledTimes(0);
  })
  test('Should call onSuccess when predicate is fail', () => {
    check(() => false, onSuccess, onFail)
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
  })
})
