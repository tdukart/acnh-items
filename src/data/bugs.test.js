import bugs from './bugs';
import find from 'lodash.find';

describe('bugs database', () => {
  it('has the proper data for the common butterfly', () => {
    const expected = {
      name: 'common butterfly',
      critterpediaOrder: 1,
      price: 160,
      location: 'Flying',
      timeRanges: {
        range1: [4, 19],
      },
      months: '111111001111',
    }
    const actual = find(bugs, { name: 'common butterfly' });
    expect(actual).toMatchObject(expected);
    expect(actual).not.toHaveProperty('timeRanges.range2')
  });

  // Ensure that the data is correct for more expensive bugs.
  it('has the proper data for the orchid mantis', () => {
    const expected = {
      name: 'orchid mantis',
      critterpediaOrder: 23,
      price: 2400,
      location: 'On Flowers (White)',
      timeRanges: {
        range1: [8, 17],
      },
      months: '001111111110',
    }
    const actual = find(bugs, { name: 'orchid mantis' });
    expect(actual).toMatchObject(expected);
    expect(actual).not.toHaveProperty('timeRanges.range2')
  });

  // Ensure that the data is correct for all-day bugs.
  it('has the proper data for the wasp', () => {
    const expected = {
      name: 'wasp',
      critterpediaOrder: 25,
      price: 2500,
      location: 'Shaking Trees',
      timeRanges: {
        range1: [0, 24],
      },
      months: '111111111111',
    }
    const actual = find(bugs, { name: 'wasp' });
    expect(actual).toMatchObject(expected);
    expect(actual).not.toHaveProperty('timeRanges.range2')
  });

  // Ensure that the data is correct for multi-range bugs.
  it('has the proper data for the evening cicada', () => {
    const expected = {
      name: 'evening cicada',
      critterpediaOrder: 30,
      price: 550,
      location: 'On Trees',
      timeRanges: {
        range1: [4, 8],
        range2: [16, 19],
      },
      months: '000000110000',
    }
    const actual = find(bugs, { name: 'evening cicada' });
    expect(actual).toMatchObject(expected);
  });
})
