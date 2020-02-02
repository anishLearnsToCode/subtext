import { Component } from '@angular/core';
import {GroupService} from './services/group.service';
import {ChatService} from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subtext';

  constructor(private readonly groupService: GroupService,
              private readonly chatService: ChatService) {
  }

  private updateSelectedGroup(groupName: string) {
    this.groupService.currentlySelected = groupName;
  }
}
