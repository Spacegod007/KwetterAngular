import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {Tweet} from "../../../models/Tweet";
import {TweetService} from "../../../services/tweet.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-sendtweet',
  templateUrl: './sendtweet.component.html',
  styleUrls: ['./sendtweet.component.css']
})
export class SendtweetComponent implements OnInit {
  @Input() user: User;

  tweetText: string;

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
  }

  sendTweet() {
    const tweet: Tweet = { id: 1, text: this.tweetText, date: new Date(), author: this.user, responseToTweet: null, reactions: []};
    this.tweetService.sendTweet(tweet).subscribe(result =>{
      this.user.tweets.unshift(result);
    });
    this.tweetText = "";
  }

  trySend($event: KeyboardEvent) {
    if ($event.key === "Enter")
    {
      this.sendTweet();
    }
  }
}
