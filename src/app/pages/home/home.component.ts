import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {AuthenticateService} from "../../services/authenticate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user$: Observable<User>;

  constructor(private authenticateService: AuthenticateService,
              private router: Router) { }

  ngOnInit() {
    if (this.authenticateService.isLoggedIn())
    {
      this.user$ = this.authenticateService.getLoggedInUser();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
