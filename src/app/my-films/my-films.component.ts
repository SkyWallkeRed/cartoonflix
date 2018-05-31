import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import Film from '../film';
import listsTypes from 'src/app/listsTypes';


@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.scss'],

})
export class MyFilmsComponent implements OnInit {
  public movies: Array<Film> = [];
  public type = listsTypes.myCollection;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMyFilms();
  }
  removeClickedMovie(movieIndex) {
    this.movies.splice(movieIndex, 1);
  }


}
