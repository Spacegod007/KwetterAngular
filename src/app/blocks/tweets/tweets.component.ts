import {Component, OnInit} from '@angular/core';
import {Tweet} from '../../models/Tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[] = [
    { id: 1, text: 'test tweet 1 text', sender: 'Jordi'},
    { id: 2, text: 'test tweet 2 text', sender: 'Jordi'},
    { id: 3, text: 'test tweet 3 text', sender: 'Jordi'},
    { id: 4, text: 'test tweet 4 text', sender: 'Jordi'},
    { id: 5, text: 'test tweet 5 text', sender: 'Jordi'},
    { id: 6, text: 'test tweet 6 text', sender: 'Jordi'},
    { id: 7, text: 'test tweet 7 text', sender: 'Jordi'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
