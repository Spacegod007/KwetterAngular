import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from "rxjs";
import {AuthenticateService} from "../../services/authenticate.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;
  isLoggedIn: boolean;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private authenticateService: AuthenticateService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user$ = this.userService.getUser(params.id);
    });
    this.isLoggedIn = this.authenticateService.isLoggedIn();
  }
}
