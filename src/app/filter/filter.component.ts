import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { FilterPipe } from '../pipeFilter';
import { MovieFilterPipe } from '../movie-filter.pipe';
import Film from '../film';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  // @Input() movies: Array<Film>;
  public searchtext: string;
  // public filterPipe = new MovieFilterPipe;
  @Output() filteredMovies: EventEmitter<any> = new EventEmitter();


  constructor() {

  }

  ngOnInit() {

  }
  filter(searchtext) {
    console.log(searchtext);
    // this.filteredMovies = searchtext;
    this.filteredMovies.emit(searchtext);

  }




}
