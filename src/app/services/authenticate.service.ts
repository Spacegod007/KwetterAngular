import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {retry, tap} from "rxjs/operators";
import {CookieService} from "ngx-cookie-service";
import {User} from "../models/User";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  baseUrl: string = 'http://localhost:8080/Kwetter/api/authentication';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  userChanged: EventEmitter<User>;

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService,
              private userService: UserService) { }

  login(username: string, password: string): Observable<{access_token: string, userId: number}> {
    this.cookieService.deleteAll();

    const url = `${this.baseUrl}/login`;
    return this.httpClient.post<{access_token: string, userId: number}>(url, { 'username': username, 'password': password }, this.httpOptions)
      .pipe(tap(result => {
        this.cookieService.set("access_token", result.access_token);
        this.cookieService.set("userId", JSON.stringify(result.userId));
      }), retry(1));
  }

  isLoggedIn(): boolean
  {
    return this.cookieService.get('access_token') !== null;
  }

  getLoggedInUser(): Observable<User>
  {
    const id: number = JSON.parse(this.cookieService.get('userId'));
    return this.userService.getUser(id);
  }

  logout() {
    this.cookieService.deleteAll();
  }
}
