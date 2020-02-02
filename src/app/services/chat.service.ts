import {Injectable} from '@angular/core';
import {Message} from '../message/message';
import {MessageType} from '../message/message-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private mathematicsMessages: Message[] = [];
  private physicsGroupMessages: Message[] = [];
  private csGroupMessages: Message[] = [];

  constructor() {
    this.mathematicsMessages.push(
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN),
      new Message('anish', 'maths', '__bold__', MessageType.MARKDOWN)
    );
  }

  getMessagesFor(groupName: string): Message[] {
    switch (groupName) {
      case 'maths': return this.mathematicsMessages;
      case 'physics': return this.physicsGroupMessages;
      case 'cs': return this.csGroupMessages;
    }
  }
}
