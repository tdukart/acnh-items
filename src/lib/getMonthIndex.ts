import Month from '../types/Month';
import months from '../data/months';

const getMonthStringIndex = (month: Month, isSouthernHemisphere: boolean = false): number => {
  const northernHemisphereIndex = months.indexOf(month);
  if (isSouthernHemisphere) {
    return (northernHemisphereIndex + 6) % 12;
  }
  return northernHemisphereIndex;
};

export default getMonthStringIndex;
