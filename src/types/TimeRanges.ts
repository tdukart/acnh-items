export default interface TimeRanges {
  /**
   * The first (and usually only) time range in which the item can be caught, in military hours.
   * [0, 24] indicates the item can be caught all day.
   */
  range1: [number, number];
  /**
   * The second time range in which the item can be caught, in military hours, for those items that
   * are unavailable at midday.
   */
  range2?: [number, number];
}
