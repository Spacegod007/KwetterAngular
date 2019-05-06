import {Component, Input, OnInit} from '@angular/core';
import {AuthenticateService} from "../../../services/authenticate.service";
import {User} from "../../../models/User";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {
  @Input() followUser: User;
  user: User;
  isFollowing: boolean = false;
  allowButton: boolean = false;

  constructor(private authenticateService: AuthenticateService,
              private userService: UserService) { }

  ngOnInit() {
    if (this.authenticateService.isLoggedIn())
    {
      this.authenticateService.getLoggedInUser().subscribe(result => {
          this.user = result;
          this.isFollowing = this.user.following.find(u => u.id === this.followUser.id) !== null;
          this.allowButton = this.user.id !== this.followUser.id;
      });
    }
  }

  follow() {
    this.userService.followUser(this.user.id, this.followUser.id).subscribe(() => {
      this.isFollowing = true;
      this.followUser.followers.push(this.user);
    });
  }

  unfollow() {
    this.userService.unFollowUser(this.user.id, this.followUser.id).subscribe(() => {
      this.isFollowing = false;
      const number = this.followUser.followers.indexOf(this.user);
      this.followUser.followers.splice(number, 1);
    })
  }
}
