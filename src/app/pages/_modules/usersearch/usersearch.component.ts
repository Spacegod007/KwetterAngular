import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent implements OnInit {
  foundUsers: User[] = [];
  searchText: "";

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  typing() {
    if (this.foundUsers !== undefined) {
      let user = this.foundUsers.find(u => u.name == this.searchText);
      if (user !== null && user !== undefined) {
        this.redirectToPage(user.id);
      }
    }

    if (this.searchText.length > 2)
    {
      this.userService.findUsers(this.searchText).subscribe(results => {
        this.foundUsers = results;
      });
    } else {
      this.foundUsers = [];
    }
  }

  redirectToPage(id: number) {
    this.searchText = "";
    this.router.navigate([`/profile/${id}`]);
  }
}
