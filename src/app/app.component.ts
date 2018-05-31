import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import Film from './film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userMovies: Array<Film>;
  title = 'app';

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userMovies = this.userService.getUserMovies(0);
  }

}

