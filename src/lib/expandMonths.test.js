import expandMonths from "./expandMonths";

describe('expandMonths', () => {
  const mockItem = {
    months: '000111000000',
  };

  it('is correct for the Northern Hemisphere', () => {
    const expected = {
      jan: false,
      feb: false,
      mar: false,
      apr: true,
      may: true,
      jun: true,
      jul: false,
      aug: false,
      sep: false,
      oct: false,
      nov: false,
      dec: false,
    };

    const actual = expandMonths(mockItem, false);
    expect(actual).toMatchObject(expected);
  });

  it('is correct for the Southern Hemisphere', () => {
    const expected = {
      jan: false,
      feb: false,
      mar: false,
      apr: false,
      may: false,
      jun: false,
      jul: false,
      aug: false,
      sep: false,
      oct: true,
      nov: true,
      dec: true,
    };

    const actual = expandMonths(mockItem, true);
    expect(actual).toMatchObject(expected);
  });
})
