import {User} from '../models/User';
import {Tweet} from '../models/Tweet';
import {stringify} from 'querystring';

export class MockData {
  testUser: User;
  users: User[] = [];
  tweets: Tweet[] = [];

  constructor() {
    this.testUser = {
      id: 1, name: 'Jordi', password: '', biography: 'I am the developer of Kwetter.', website: null,
      followers: [], following: [], tweets: []
    };
    this.users.push(this.testUser);
    let i: number;
    for (i = 2; i < 8; i++) {
      const follower: User = {
        id: i, name: 'test follower ' + (i - 1).toString(), password: '', biography: 'bio', website: 'web',
        followers: [], following: [this.testUser], tweets: []
      };
      this.testUser.followers.push(follower);
      this.users.push(follower);
    }
    for (i = 8; i < 14; i++) {
      const following: User = {
        id: i, name: 'test following ' + (i - 7).toString(), password: '', biography: 'bio', website: 'web',
        followers: [this.testUser], following: [], tweets: []
      };
      this.testUser.following.push(following);
      this.users.push(following);
    }
    for (i = 1; i < 8; i++) {
      const tweet: Tweet = { id: i, text: 'test tweet ' + i.toString() + ' text', date: new Date(),
        reactions: [], responseToTweet: null, author: this.testUser};
      this.testUser.tweets.push(tweet);
      this.tweets.push(tweet);
    }
  }
}
