import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from "rxjs";
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedInUser: User;
  user$: Observable<User>;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(this.cookieService.get('currentUser'));
    this.route.params.subscribe(params => {
      this.user$ = this.userService.getUser(params.id);
    });
  }
}
