import { Injectable } from '@angular/core';
import Film from './film';

const onAnySunday = new Film('Rick and Morty', 'http://static.zira.ninja/series/1774.jpg', 3);
const faster = new Film('Dexters Laboratory', 'https://upload.wikimedia.org/wikipedia/he/thumb/8/82/Dexter.jpg/200px-Dexter.jpg', 3);
const tt = new Film('Familly Guy', 'https://images-na.ssl-images-amazon.com/images/I/81wS3lMhOhL._SY445_.jpg', 3);
const theSaveg = new Film('SouthPark', 'http://3.images.southparkstudios.com/default/image.jpg?quality=0.8', 3);
const onAnySunday1 = new Film('Rick and Morty', 'http://static.zira.ninja/series/1774.jpg', 3);
const faster1 = new Film('Dexters Laboratory', 'https://upload.wikimedia.org/wikipedia/he/thumb/8/82/Dexter.jpg/200px-Dexter.jpg', 3);
const tt1 = new Film('Familly Guy', 'https://images-na.ssl-images-amazon.com/images/I/81wS3lMhOhL._SY445_.jpg', 3);
const theSaveg1 = new Film('SouthPark', 'http://3.images.southparkstudios.com/default/image.jpg?quality=0.8', 3);
const FILMS: Array<Film> = [];
const MYFILMS: Array<Film> = [];
FILMS.push(onAnySunday, faster, tt, theSaveg, onAnySunday1, faster1, tt1, theSaveg1);



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  myFilms = MYFILMS;


  constructor() {

  }
  getMyFilms() {
    return MYFILMS;
  }
  getFilms() {
    return FILMS;
  }
  addToMyFilms(movie) {
    this.myFilms.push(movie);
  }
}
