import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Observable, of} from 'rxjs';
import {Tweet} from '../models/Tweet';
import {MockData} from './mockdata';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    // mockdata: MockData;
  baseUrl: string = 'http://localhost:8080/Kwetter/api/users';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient) {
    // this.mockdata = new MockData();
  }

  getUser(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<User>(url, this.httpOptions);
    // return of(this.mockdata.users.find(user => user.id == id));
  }

  getFollowers(id: number): Observable<User[]> {
    const url = `${this.baseUrl}/${id}/followers`;
    return this.httpClient.get<User[]>(url);
    // return of(this.mockdata.users.filter(user => user.following$.find(follower => follower.id === id)));
  }

  getFollowing(id: number): Observable<User[]> {
    const url = `${this.baseUrl}/${id}/following`;
    return this.httpClient.get<User[]>(url);
    // return of(this.mockdata.users.filter(user => user.followers$.find(follower => follower.id === id)));
  }

  getLatestTweets(id: number): Observable<Tweet[]>
  {
    const url = `${this.baseUrl}/latesttweets`;
    return this.httpClient.get<Tweet[]>(url);
  }

  getUserTweets(id: number): Observable<Tweet[]> {
    const url = `${this.baseUrl}/${id}/tweets`;
    return this.httpClient.get<Tweet[]>(url);
    // return of(this.mockdata.tweets.filter(tweet => tweet.author.id === id));
  }

  registerUser(user: User): Observable<User> {
    const url = `${this.baseUrl}`;
    return this.httpClient.post<User>(url, user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.httpClient.put<User>(url, user, this.httpOptions);
  }

  followUser(id: number, followId: number): void {
    const url = `${this.baseUrl}/${id}/follow/${followId}`;
    this.httpClient.put(url, null);
  }

  unFollowUser(id: number, unfollowId: number): void {
    const url = `${this.baseUrl}/${id}/unfollow/${unfollowId}`;
    this.httpClient.put(url, null);
  }

  removeUser(id: number): void {
    const url = `${this.baseUrl}/${id}`;
    this.httpClient.delete(url);
  }

  findUsers(tag: string): Observable<User[]> {
    const url = `${this.baseUrl}/search/${tag}`;
    return this.httpClient.get<User[]>(url);
  }
}
