import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import Film from 'src/app/film';
import listsTypes from 'src/app/listsTypes';



@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  public movies: Array<Film>;
  public type = listsTypes.allMovies;
  public searchtext;
  constructor(private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.movies = this.moviesService.getFilms();

  }
  getClickedMovie(clickedMovieIdx) {
    // console.log('from the LIST');
    // console.log(clickedMovie);
    this.moviesService.addToMyFilms(clickedMovieIdx);
  }
  filteredFilms(searchtext) {
    console.log(searchtext);
    this.searchtext = searchtext;
    // this.movies = movies;


  }
}
