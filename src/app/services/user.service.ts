import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Observable, of} from 'rxjs';
import {Tweet} from '../models/Tweet';
import {MockData} from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  mockdata: MockData = new MockData();

  constructor() { }

  getUser(id: number): Observable<User> {
    return of(this.mockdata.users.find(user => user.id == id));
  }

  getFollowers(id: number): Observable<User[]> {
    return of(this.mockdata.users.filter(user => user.followers.find(followerId => followerId === id)));
  }

  getFollowing(id: number): Observable<User[]> {
    return of(this.mockdata.users.filter(user => user.following.find(followerId => followerId === id)));
  }

  getUserTweets(id: number): Observable<Tweet[]> {
    return of(this.mockdata.tweets.filter(tweet => tweet.sender.id === id));
  }
}
