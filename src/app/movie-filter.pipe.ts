import { Pipe, PipeTransform } from '@angular/core';
import Film from './film';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Array<Film>, searchtext: string): Array<Film> {
    if (searchtext === undefined) {
      return movies;
    } else {
      searchtext = searchtext.toLowerCase();
      return movies.filter((movie) => {
    return  movie.name.toLowerCase().includes(searchtext);
      });
    }
  }

}

