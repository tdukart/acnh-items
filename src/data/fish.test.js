import fish from './fish';
import find from 'lodash.find';

describe('fish database', () => {
  it('has the proper data for the bitterling', () => {
    const expected = {
      name: 'bitterling',
      critterpediaOrder: 1,
      price: 900,
      shadowSize: 1,
      location: 'River',
      timeRanges: {
        range1: [0, 24],
      },
      months: '111000000011',
    }
    const actual = find(fish, { name: 'bitterling' });
    expect(actual).toMatchObject(expected);
    expect(actual).not.toHaveProperty('timeRanges.range2')
  });
})
