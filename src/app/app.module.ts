import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserinformationComponent } from './pages/modules/userinformation/userinformation.component';
import { TweetsComponent } from './pages/modules/tweets/tweets.component';
import { TweetComponent } from './pages/modules/tweet/tweet.component';
import { FollowersComponent } from './pages/modules/followers/followers.component';
import { FollowerComponent } from './pages/modules/follower/follower.component';


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
