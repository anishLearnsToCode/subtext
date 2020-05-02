import { Component} from '@angular/core';
import {GroupService} from "../services/group.service";
import {ChatService} from "../services/chat.service";
import {UserService} from "../services/user.service";
import {MarkdownParserService} from "../services/markdown-parser.service";
import {ClipboardService} from "../services/clipboard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'subtext';
  message = '';

  constructor(private readonly groupService: GroupService,
              private readonly chatService: ChatService,
              private readonly userService: UserService,
              private readonly router: Router) {
  }

  private updateSelectedGroup(groupName: string) {
    this.groupService.currentlySelected = groupName;
  }

  isLatexMessage(): boolean {
    return this.groupService.currentlySelected === 'maths' || this.groupService.currentlySelected === 'physics';
  }

  isMarkdownMessage(): boolean {
    return this.groupService.currentlySelected === 'cs';
  }

  getMarkdownMessage(): string {
    return MarkdownParserService.parse(this.message);
  }

  sendMessage() {
    this.chatService.sendNewMessage(this.message, this.groupService.currentlySelected);
    this.message = '';
  }

  copyMessageFromClipboard(): void {
    this.message += ClipboardService.getMessage();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['login']);
  }
}
