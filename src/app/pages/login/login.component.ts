import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {AuthenticateService} from "../../services/authenticate.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = new FormControl(``);
  password = new FormControl(``);

  constructor(private authenticateService: AuthenticateService,
              private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
    this.cookieService.deleteAll();
  }

  login() {
    const name: string = this.name.value;
    const pass: string = this.password.value;
    this.authenticateService.login(name, pass).subscribe(() => {
      this.loginSucceeded();
    });
  }

  loginSucceeded() {
    //this.router.navigate([`/home`]);
    location.href = '/home';
  }
}
