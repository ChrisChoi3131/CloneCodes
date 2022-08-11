import { readingsOutsideRange, NumberRange } from '../6-8';

describe('readingsOutsideRange', () => {
  const station = {
    name: 'ZB1',
    readings: [
      { temp: 47, time: '2016-11-10 09:10' },
      { temp: 53, time: '2016-11-10 09:20' },
      { temp: 58, time: '2016-11-10 09:30' },
      { temp: 53, time: '2016-11-10 09:40' },
      { temp: 51, time: '2016-11-10 09:50' },
    ],
  };
  const range = new NumberRange(51, 53)
  const expected = [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 58, time: '2016-11-10 09:30' },
  ]
  it('', () => {
    expect(readingsOutsideRange(station.readings, range)).toMatchObject(expected)
  })
})