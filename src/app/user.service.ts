import { Injectable } from '@angular/core';
import User from './user';



const USERS: Array<User> = new Array<User>();
const admin = new User('david', '123', 'davidmail000@gmail.com', 12);
USERS.push(admin);

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserMovies(id) {
    return USERS[id].userFilms;
  }
}
