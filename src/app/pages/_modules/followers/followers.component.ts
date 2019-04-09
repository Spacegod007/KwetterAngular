import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  @Input() user: User;
  followers: User[];
  following: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getFollowers(this.user.id).subscribe(result => this.followers = result);
    this.userService.getFollowing(this.user.id).subscribe(result => this.following = result);
  }
}
