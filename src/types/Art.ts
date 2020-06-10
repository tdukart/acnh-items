import { AlwaysAuthentic, ForgeryDescription, Name } from './basicTypes';

export default interface Art {
  name: Name;
  alwaysAuthentic: AlwaysAuthentic;
  forgeryDescription: ForgeryDescription;
}
