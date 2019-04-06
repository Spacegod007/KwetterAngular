import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {Tweet} from '../../../models/Tweet';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit{
  @Input() user: User;
  tweets: Tweet[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserTweets(this.user.id).subscribe(result => this.tweets = result);
  }
}
