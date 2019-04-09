import { Injectable } from '@angular/core';
import {Tweet} from '../models/Tweet';
import {MockData} from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  mockdata: MockData;

  constructor() {
    this.mockdata = new MockData();
  }

  getTweet(id: number): Tweet {
    return this.mockdata.tweets.find(tweet => tweet.id === id);
  }
}
