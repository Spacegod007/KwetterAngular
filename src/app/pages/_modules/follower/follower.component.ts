import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  @Input() user: User;
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function shouldReuseRoute() {
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
  }

}
