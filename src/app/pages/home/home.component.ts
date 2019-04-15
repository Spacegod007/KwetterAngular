import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService,
              private cookieService: CookieService) { }
  ngOnInit() {
    this.user$ = this.userService.getUser(2);

    this.user$.subscribe(result => {
      this.cookieService.set('currentUser', JSON.stringify(result));
    })
  }
}
