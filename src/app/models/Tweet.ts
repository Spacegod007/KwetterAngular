import {User} from './User';

export class Tweet {
  id: number;
  text: string;
  date: Date
  author: User;
  responseToTweet: Tweet;
  reactions: Tweet[];
}
