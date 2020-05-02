import { Injectable } from '@angular/core';
import {User} from "./user";
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = new Map<string, string>();
  private users$;
  private activeUser: string;
  private activeUserKey: string;

  constructor(private readonly database: AngularFireDatabase) {
    this.users$ = database.list('/user');
    this.subscribeToChanges();
  }

  subscribeToChanges(): void {
    // this.users$.valueChanges().subscribe(users => {
    //   this.userNames = new Set<string>(users);
    //   console.log(this.userNames);
    // });

    this.users$.snapshotChanges().subscribe(users => {
      users.map(user => {
        console.log(user.payload.node_.value_);
        console.log(user.key);
        this.users.set(user.payload.node_.value_, user.key);
      });
      console.log(this.users);
    });
  }

  public currentUser(): string {
    return this.activeUser;
  }

  userNameExist(name: string): boolean {
    return this.users.has(name);
  }

  addUser(name: string) {
    this.users$.push(name);
    this.activeUser = name;
  }

  logout(): void {
    this.database.object('/user/' + this.users.get(this.activeUser)).remove();
    this.users.delete(name);
  }
}
