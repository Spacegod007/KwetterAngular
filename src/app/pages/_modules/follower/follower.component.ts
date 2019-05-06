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
  constructor() {
  }

  ngOnInit() {
  }
}
