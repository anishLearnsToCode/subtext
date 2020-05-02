import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: Set<User> = new Set<User>();
  private userNames: Set<string> = new Set<string>();
  private user;

  constructor() {
    this.user = new User('anish');
  }

  public currentUser(): User {
    return this.user;
  }

  userNameExist(name: string): boolean {
    return this.userNames.has(name);
  }

  addUser(name: string) {
    const user = new User(name);
    this.users.add(user);
    this.userNames.add(name);
    this.user = user;
  }

  logout(): void {
    this.users.delete(this.user);
    this.userNames.delete(this.user.name);
  }
}
