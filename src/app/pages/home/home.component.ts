import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {User} from "../../models/User";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    const loggedInUserSimulationId: number = 1;

    this.user$ = this.userService.getUser(loggedInUserSimulationId);
  }
}
