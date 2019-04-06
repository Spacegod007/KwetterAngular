import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'Jordi',
    biography: 'I am the developer of Kwetter.',
    website: null
  };

  constructor() { }

  ngOnInit() {
  }

}
