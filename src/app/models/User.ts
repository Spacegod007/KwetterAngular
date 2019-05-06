import {Tweet} from './Tweet';

export class User {
  id: number;
  name: string;
  password: string;
  biography: string;
  website: string;
  followers: User[];
  following: User[];
  tweets: Tweet[];
}
