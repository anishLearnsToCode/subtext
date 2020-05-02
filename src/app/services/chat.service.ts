import {Injectable} from '@angular/core';
import {Message} from '../message/message';
import {MessageType} from '../message/message-type.enum';
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {AngularFireDatabase} from 'angularfire2/database';
import {discardPeriodicTasks} from "@angular/core/testing";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private mathematicsMessages: Message[] = [];
  private physicsGroupMessages: Message[] = [];
  private csGroupMessages: Message[] = [];

  private cs$;
  private mathematics$;
  private physics$;

  constructor(private readonly userService: UserService, private readonly database: AngularFireDatabase) {
    this.cs$ = database.list('/cs');
    this.mathematics$ = database.list('/mathematics');
    this.physics$ = database.list('/physics');
    this.subscribeToDataChanges();
  }

  subscribeToDataChanges(): void {
    this.cs$.valueChanges().subscribe(messages => {
      this.csGroupMessages = messages;
    });

    this.mathematics$.valueChanges().subscribe(messages => {
      this.mathematicsMessages = messages;
    });

    this.physics$.valueChanges().subscribe(messages => {
      this.physicsGroupMessages = messages;
    });
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
      new Message(this.userService.currentUser(), group, message, this.getMessageTypeFromGroup(group))
    );
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
      case 'maths': return this.mathematics$;
      case 'physics': return this.physics$;
      case 'cs': return this.cs$;
    }
  }
}
