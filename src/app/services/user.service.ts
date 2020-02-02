import { Injectable } from '@angular/core';
import {User} from "./user";
import {animate} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static anish: User = new User('anish');
  private user = new User('anish');

  constructor() {
    this.user = new User('anish');
  }

  static currentUser(): User {
    return this.anish;
  }

  public currentUser(): User {
    return this.user;
  }
}
