import { Injectable } from '@angular/core';
import {Tweet} from '../models/Tweet';
import {MockData} from './mockdata';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  // mockdata: MockData;
  baseUrl: string = 'http://localhost:8080/Kwetter/api/tweets';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient) {
    // this.mockdata = new MockData();
  }

  getTweet(id: number): Observable<Tweet> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Tweet>(url);
    // return this.mockdata.tweets.find(tweet => tweet.id === id);
  }

  getTweetReactions(id: number): Observable<Tweet[]> {
    const url = `${this.baseUrl}/${id}/replies`;
    return this.httpClient.get<Tweet[]>(url);
  }

  getTweetResponseTo(id: number): Observable<Tweet> {
    const url = `${this.baseUrl}/${id}/replyto`;
    return this.httpClient.get<Tweet>(url);
  }

  sendTweet(tweet: Tweet): Observable<Tweet> {
    const url = `${this.baseUrl}`;
    return this.httpClient.post<Tweet>(url, tweet, this.httpOptions);
  }

  sendReaction(id: number, tweet: Tweet): Observable<Tweet> {
    const url = `${this.baseUrl}/${id}/reaction`;
    return this.httpClient.put<Tweet>(url, tweet, this.httpOptions);
  }

  updateTweet(id: number, tweet: Tweet): Observable<Tweet> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.put<Tweet>(url, tweet, this.httpOptions);
  }

  removeTweet(id: number): void {
    const url = `${this.baseUrl}/${id}`;
    this.httpClient.delete(url);
  }
}
