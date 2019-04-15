import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service';
import {ViewTweetType} from "../../../models/ViewTweetType";
import {Observable} from "rxjs";
import {Tweet} from "../../../models/Tweet";

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  @Input() user: User;
  @Input() viewType: ViewTweetType;

  constructor(private userService: UserService) { }

  ngOnInit() {
    let tweetsByType = this.getTweetsByType(this.viewType);
    tweetsByType.subscribe(result => {
      this.user.tweets = result;
    });
  }

  getTweetsByType(type: ViewTweetType): Observable<Tweet[]>
  {
    switch (type) {
      case ViewTweetType.ALL:
        return this.userService.getUserTweets(this.user.id);
      case ViewTweetType.NEWEST:
        return this.userService.getLatestTweets(this.user.id);
      case ViewTweetType.FEED:
        return this.userService.getUserFeed(this.user.id);
    }
  }
}
