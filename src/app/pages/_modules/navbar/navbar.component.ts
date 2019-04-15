import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {User} from "../../../models/User";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.user = JSON.parse(this.cookieService.get('currentUser'))
  }

}
