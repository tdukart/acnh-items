import zipObject from 'lodash.zipobject';
import availableIn from './availableIn';
import months from '../data/months';
import Month from '../types/Month';
import PartialYearItem from '../types/PartialYearItem';

export type MonthsDictionary = {
  [month in Month]: boolean;
};

/**
 * Expands the "months" property of a bug or fish to a dictionary of month>boolean.
 * @param item                 - The item to produce a dictionary of months.
 * @param isSouthernHemisphere - If the island is in the southern hemisphere.
 */
const expandMonths = (item: PartialYearItem, isSouthernHemisphere: boolean = false): MonthsDictionary => {
  const monthValues = months.map(month => availableIn(item, month, isSouthernHemisphere));
  return zipObject(months, monthValues) as MonthsDictionary;
};

export default expandMonths;
