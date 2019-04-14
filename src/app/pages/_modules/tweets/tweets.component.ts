import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {Tweet} from '../../../models/Tweet';
import {UserService} from '../../../services/user.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserTweets(this.user.id).subscribe(result => {
      this.user.tweets = result;
    });
  }
}
