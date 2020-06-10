import {
  CritterpediaOrder,
  HasFin,
  Location,
  Months,
  Name,
  ResalePrice,
  ShadowSize,
  Time,
} from './basicTypes';
import TimeRanges from './TimeRanges';

export default interface Fish {
  name: Name;
  critterpediaOrder: CritterpediaOrder;
  price: ResalePrice;
  location: Location;
  shadowSize: ShadowSize;
  fin: HasFin;
  time: Time;
  months: Months;
  timeRanges: TimeRanges;
}
