import {Injectable} from '@angular/core';
import {Message} from '../message/message';
import {MessageType} from '../message/message-type.enum';
import {UserService} from "./user.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private mathematicsMessages: Message[] = [];
  private physicsGroupMessages: Message[] = [];
  private csGroupMessages: Message[] = [];
  private csMessages: Observable<Message[]>;

  constructor(private readonly userService: UserService) {
  }

  getMessagesFor(groupName: string): Message[] {
    switch (groupName) {
      case 'maths': return this.mathematicsMessages;
      case 'physics': return this.physicsGroupMessages;
      case 'cs': return this.csGroupMessages;
      default: return [];
    }
  }

  sendNewMessage(message: string, group: string) {
    this.getMessagesGroup(group).push(
      new Message(this.userService.currentUser().name, group, message, this.getMessageTypeFromGroup(group))
    )
  }

  getMessageTypeFromGroup(group: string): MessageType {
    switch (group) {
      case 'maths':  return MessageType.LATEX;
      case 'physics': return MessageType.LATEX;
      case 'cs': return MessageType.MARKDOWN;
    }
  }

  getMessagesGroup(group: string): Message[] {
    switch (group) {
      case 'maths': return this.mathematicsMessages;
      case 'physics': return this.physicsGroupMessages;
      case 'cs': return this.csGroupMessages;
    }
  }
}
