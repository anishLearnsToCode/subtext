import {Injectable} from '@angular/core';
import {Message} from '../message/message';
import {MessageType} from '../message/message-type.enum';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private mathematicsMessages: Message[] = [];
  private physicsGroupMessages: Message[] = [];
  private csGroupMessages: Message[] = [];

  constructor(private readonly userService: UserService) {
    this.physicsGroupMessages.push(
      new Message('piyush', 'physics', "$c = \\pm\\sqrt{a^2 + b^2}$", MessageType.LATEX),
      new Message('piyush', 'physics', '$\\sum_{i=1}^nx_i$', MessageType.LATEX),
      new Message('piyush', 'physics', '$x^2 + 5$', MessageType.LATEX),
      new Message('piyush', 'physics', '$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$', MessageType.LATEX),
    );
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
