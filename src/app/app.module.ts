import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserinformationComponent } from './pages/_modules/userinformation/userinformation.component';
import { TweetsComponent } from './pages/_modules/tweets/tweets.component';
import { TweetComponent } from './pages/_modules/tweet/tweet.component';
import { FollowersComponent } from './pages/_modules/followers/followers.component';
import { FollowerComponent } from './pages/_modules/follower/follower.component';
import { HomeComponent } from './pages/home/home.component';
import { SendtweetComponent } from './pages/_modules/sendtweet/sendtweet.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserinformationComponent,
    TweetsComponent,
    TweetComponent,
    FollowersComponent,
    FollowerComponent,
    HomeComponent,
    SendtweetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
