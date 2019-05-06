import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {User} from "../../../models/User";
import {AuthenticateService} from "../../../services/authenticate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private cookieService: CookieService,
              private authenticateService: AuthenticateService,
              private router: Router) { }

  ngOnInit() {
    if (this.authenticateService.isLoggedIn())
    {
      this.authenticateService.getLoggedInUser().subscribe(result => {
        this.user = result;
      });
    }
  }

  logout() {
    this.authenticateService.logout();
    this.user = null;
    this.router.navigate([`/login`]);
  }
}
