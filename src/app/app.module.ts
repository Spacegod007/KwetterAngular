import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserinformationComponent } from './blocks/userinformation/userinformation.component';
import { TweetsComponent } from './blocks/tweets/tweets.component';
import { TweetComponent } from './blocks/tweet/tweet.component';
import { FollowersComponent } from './blocks/followers/followers.component';
import { FollowerComponent } from './blocks/follower/follower.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserinformationComponent,
    TweetsComponent,
    TweetComponent,
    FollowersComponent,
    FollowerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
