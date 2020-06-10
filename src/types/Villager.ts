import { Birthday, Catchphrase, Gender, Hobbies, Name, Personality, Species } from './basicTypes';

export default interface Villager {
  name: Name;
  personality: Personality;
  gender: Gender;
  species: Species;
  birthday: Birthday;
  catchphrase: Catchphrase;
  hobbies: Hobbies;
}
