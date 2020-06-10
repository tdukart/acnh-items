import { FossilGroup, Name, ResalePrice } from './basicTypes';

export default interface Fossil {
  name: Name;
  price: ResalePrice;
  group?: FossilGroup;
}
