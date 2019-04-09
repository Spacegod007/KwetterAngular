import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {Tweet} from "../../../models/Tweet";

@Component({
  selector: 'app-sendtweet',
  templateUrl: './sendtweet.component.html',
  styleUrls: ['./sendtweet.component.css']
})
export class SendtweetComponent implements OnInit {
  @Input() user: User;

  tweetText: string;

  constructor() { }

  ngOnInit() {
  }

  sendTweet() {
    console.log(this.tweetText);

    // var tweet = new Tweet();
    // tweet.sender = this.user;
    // tweet.text = this.tweetText;

    //todo send tweet
  }
}
