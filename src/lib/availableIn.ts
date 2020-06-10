import getMonthStringIndex from './getMonthIndex';
import Month from '../types/Month';
import PartialYearItem from '../types/PartialYearItem';

const availableIn = (item: PartialYearItem, month: Month, isSouthernHemisphere: boolean = false) => {
  const monthIndex = getMonthStringIndex(month, isSouthernHemisphere);
  return item.months[monthIndex] === '1';
};

export default availableIn;
