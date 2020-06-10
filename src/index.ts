import zipObject from 'lodash.zipobject';

import bugs from './data/bugs';
import fish from './data/fish';
import fossils from './data/fossils';
import songs from './data/songs';
import { Months } from './types/basicTypes';

export type Month = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'sep' | 'oct' | 'nov' | 'dec';

export type MonthsDictionary = {
  [month in Month]: boolean;
};

/**
 * Expands the "months" property of a bug or fish to a dictionary of month>boolean.
 * @param monthString          - The "months" property, a 12-character string matching the regex [01]{12}
 * @param isSouthernHemisphere - If the island is in the southern hemisphere.
 */
const expandMonths = (monthString: Months, isSouthernHemisphere: boolean = false): MonthsDictionary => {
  let monthKeys: Month[] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  if (isSouthernHemisphere) {
    monthKeys = [...monthKeys.slice(6), ...monthKeys.slice(0, 6)];
  }

  const monthValues = monthString.split('').map(value => value === '1');
  return zipObject(monthKeys, monthValues) as MonthsDictionary;
};

export { bugs, fish, fossils, songs, expandMonths };
