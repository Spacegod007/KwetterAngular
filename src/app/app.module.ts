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
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './pages/_modules/navbar/navbar.component';
import { UsersearchComponent } from './pages/_modules/usersearch/usersearch.component';
import { LoginComponent } from './pages/login/login.component';
import { FollowComponent } from './pages/_modules/follow/follow.component';


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
    NavbarComponent,
    UsersearchComponent,
    LoginComponent,
    FollowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
