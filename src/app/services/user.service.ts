import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {Tweet} from '../models/Tweet';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'http://localhost:8080/Kwetter/api/users';
  httpOptions = { headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': this.cookieService.get('access_token')
    }) };

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) { }

  getUser(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<User>(url);
  }

  getFollowers(id: number): Observable<User[]> {
    const url = `${this.baseUrl}/${id}/followers`;
    return this.httpClient.get<User[]>(url);
  }

  getFollowing(id: number): Observable<User[]> {
    const url = `${this.baseUrl}/${id}/following`;
    return this.httpClient.get<User[]>(url);
  }

  getUserTweets(id: number): Observable<Tweet[]> {
    const url = `${this.baseUrl}/${id}/tweets`;
    return this.httpClient.get<Tweet[]>(url);
  }

  getLatestTweets(id: number): Observable<Tweet[]>
  {
    const url = `${this.baseUrl}/${id}/latesttweets`;
    return this.httpClient.get<Tweet[]>(url);
  }

  getUserFeed(id: number): Observable<Tweet[]> {
    const url = `${this.baseUrl}/${id}/feed`;
    return this.httpClient.get<Tweet[]>(url, this.httpOptions);
  }

  registerUser(user: User): Observable<User> {
    const url = `${this.baseUrl}`;
    return this.httpClient.post<User>(url, user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.httpClient.put<User>(url, user, this.httpOptions);
  }

  followUser(id: number, followId: number) {
    const url = `${this.baseUrl}/${id}/follow/${followId}`;
    return this.httpClient.put(url, null);
  }

  unFollowUser(id: number, unfollowId: number) {
    const url = `${this.baseUrl}/${id}/unfollow/${unfollowId}`;
    return this.httpClient.put(url, null);
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
