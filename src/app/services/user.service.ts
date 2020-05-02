import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = new Map<string, string>();
  private users$;
  private activeUser: string;

  constructor(private readonly database: AngularFireDatabase) {
    this.users$ = database.list('/user');
    this.subscribeToChanges();
  }

  subscribeToChanges(): void {
    this.users$.snapshotChanges().subscribe(users => {
      this.users.clear();
      users.map(user => {
        this.users.set(user.payload.node_.value_, user.key);
      });
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
  }
}
