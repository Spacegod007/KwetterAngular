import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css']
})
export class UserinformationComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
