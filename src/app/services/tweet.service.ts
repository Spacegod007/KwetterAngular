import { Injectable } from '@angular/core';
import {Tweet} from '../models/Tweet';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  baseUrl: string = 'http://localhost:8080/Kwetter/api/tweets';
  httpOptions = { headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': this.cookieService.get('access_token')
      }) };

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {
  }

  getTweet(id: number): Observable<Tweet> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Tweet>(url);
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
