import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: User[] = [
    { id: 2, name: 'test follower 1', biography: 'bio', website: 'web'},
    { id: 3, name: 'test follower 2', biography: 'bio', website: 'web'},
    { id: 4, name: 'test follower 3', biography: 'bio', website: 'web'},
    { id: 5, name: 'test follower 4', biography: 'bio', website: 'web'},
    { id: 6, name: 'test follower 5', biography: 'bio', website: 'web'},
    { id: 7, name: 'test follower 6', biography: 'bio', website: 'web'}
  ];
  following: User[] = [
    { id: 8, name: 'test following 1', biography: 'bio', website: 'web'},
    { id: 9, name: 'test following 2', biography: 'bio', website: 'web'},
    { id: 10, name: 'test following 3', biography: 'bio', website: 'web'},
    { id: 11, name: 'test following 4', biography: 'bio', website: 'web'},
    { id: 12, name: 'test following 5', biography: 'bio', website: 'web'},
    { id: 13, name: 'test following 6', biography: 'bio', website: 'web'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
