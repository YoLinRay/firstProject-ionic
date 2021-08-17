import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { USERS } from './users.mock';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = USERS;
  vaildUser:boolean = false;
  constructor() { }
  isValidUser(userEmail: string, password: string): any {

    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (userEmail === user.Email && password === user.password) {
        this.vaildUser = user.vaildUser = true;
        return [true , this.users[i]]
      }
    }
    return false;
  }

  getUser(id: number): User {

    for (let i = 0; i < this.users.length; i++) {

      if (this.users[i].id === id) {

        return this.users[i];

      }
    }
    return null;
  }
}
