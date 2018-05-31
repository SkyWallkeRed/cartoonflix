import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Film from '../film';
import listsTypes from 'src/app/listsTypes';



@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() movie: Film = new Film();
  @Output() clickedMovie: EventEmitter<Film> = new EventEmitter();
  @Output() clickedMovieInMyCollection: EventEmitter<Film> = new EventEmitter();

  @Input() type: number;
  listTypes = listsTypes;

  constructor() { }

  ngOnInit() {
    console.log(this.movie.name);
  }
  submitAddToMyCollection(movie) {
    console.log(movie);
    this.clickedMovie.emit(movie);
  }
  submitRemoveFromMyCollection(movie) {
    this.clickedMovieInMyCollection.emit(movie);
  }

}
