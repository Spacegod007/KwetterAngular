import {User} from '../models/User';
import {Tweet} from '../models/Tweet';

export class MockData {
  testUser: User = {id: 1, name: 'Jordi', biography: 'I am the developer of Kwetter.', website: null,
    followers: [2, 3, 4, 5, 6, 7], following: [8, 9, 10, 11, 12, 13], tweets: [1, 2, 3, 4, 5, 6, 7]};

  users: User[] = [
    this.testUser,
    { id: 2, name: 'test follower 1', biography: 'bio', website: 'web', followers: [], following: [1], tweets: []},
    { id: 3, name: 'test follower 2', biography: 'bio', website: 'web', followers: [], following: [1], tweets: []},
    { id: 4, name: 'test follower 3', biography: 'bio', website: 'web', followers: [], following: [1], tweets: []},
    { id: 5, name: 'test follower 4', biography: 'bio', website: 'web', followers: [], following: [1], tweets: []},
    { id: 6, name: 'test follower 5', biography: 'bio', website: 'web', followers: [], following: [1], tweets: []},
    { id: 7, name: 'test follower 6', biography: 'bio', website: 'web', followers: [], following: [1], tweets: []},
    { id: 8, name: 'test following 1', biography: 'bio', website: 'web', followers: [1], following: [], tweets: []},
    { id: 9, name: 'test following 2', biography: 'bio', website: 'web', followers: [1], following: [], tweets: []},
    { id: 10, name: 'test following 3', biography: 'bio', website: 'web', followers: [1], following: [], tweets: []},
    { id: 11, name: 'test following 4', biography: 'bio', website: 'web', followers: [1], following: [], tweets: []},
    { id: 12, name: 'test following 5', biography: 'bio', website: 'web', followers: [1], following: [], tweets: []},
    { id: 13, name: 'test following 6', biography: 'bio', website: 'web', followers: [1], following: [], tweets: []}
  ];

  tweets: Tweet[] = [
    { id: 1, text: 'test tweet 1 text', sender: this.testUser},
    { id: 2, text: 'test tweet 2 text', sender: this.testUser},
    { id: 3, text: 'test tweet 3 text', sender: this.testUser},
    { id: 4, text: 'test tweet 4 text', sender: this.testUser},
    { id: 5, text: 'test tweet 5 text', sender: this.testUser},
    { id: 6, text: 'test tweet 6 text', sender: this.testUser},
    { id: 7, text: 'test tweet 7 text', sender: this.testUser}
  ];
}
