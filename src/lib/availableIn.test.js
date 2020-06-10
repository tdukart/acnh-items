import availableIn from "./availableIn";
import months from "../data/months";

describe('availableIn', () => {
  const mockItem = {
    months: '000111000000',
  };
  const expectedAvailabilityInNorth = [
    ['jan', false],
    ['feb', false],
    ['mar', false],
    ['apr', true],
    ['may', true],
    ['jun', true],
    ['jul', false],
    ['aug', false],
    ['sep', false],
    ['oct', false],
    ['nov', false],
    ['dec', false],
  ];
  const expectedAvailabilityInSouth = [
    ['jan', false],
    ['feb', false],
    ['mar', false],
    ['apr', false],
    ['may', false],
    ['jun', false],
    ['jul', false],
    ['aug', false],
    ['sep', false],
    ['oct', true],
    ['nov', true],
    ['dec', true],
  ];

  describe.each(expectedAvailabilityInNorth)(
    'shows the mock item\'s availability in the Northern Hemisphere in %s',
    (month, expected) => {
      test(`shows availability is ${expected}`, () => {
        const actual = availableIn(mockItem, month, false);
        expect(actual).toBe(expected);
      })
    },
  )

  describe.each(expectedAvailabilityInSouth)(
    'shows the mock item\'s availability in the Southern Hemisphere in %s',
    (month, expected) => {
      test(`shows availability is ${expected}`, () => {
        const actual = availableIn(mockItem, month, true);
        expect(actual).toBe(expected);
      })
    },
  )
})
