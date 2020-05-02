import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  constructor(private readonly userService: UserService,
              private readonly router: Router) { }

  ngOnInit() {
  }

  userNameExists(): boolean {
    return this.userService.userNameExist(this.userName);
  }

  joinChatRoom() {
    this.userService.addUser(this.userName);
    console.log(this.userName + ' added');
    this.router.navigate(['dashboard']);
  }
}
