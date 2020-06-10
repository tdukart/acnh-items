import TimeRanges from './TimeRanges';
import { CritterpediaOrder, Location, Months, Name, ResalePrice, Time } from './basicTypes';

export default interface Bug {
  name: Name;
  critterpediaOrder: CritterpediaOrder;
  price: ResalePrice;
  location: Location;
  time: Time;
  timeRanges: TimeRanges;
  months: Months;
};
