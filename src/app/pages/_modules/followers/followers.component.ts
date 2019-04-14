import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  @Input() user: User;
  followers$;
  following$;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.followers$ = this.userService.getFollowers(this.user.id);
    this.following$ = this.userService.getFollowing(this.user.id);
    this.followers$.subscribe(result => this.user.followers = result);
    this.following$.subscribe(result => this.user.following = result);
  }
}
