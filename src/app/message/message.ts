import {MessageType} from './message-type.enum';
import {MarkdownParserService} from '../services/markdown-parser.service';

export class Message {
  sender: string;
  group: string;
  timestamp: Date;
  utfContent: string;
  innerHtml: string;
  messageType: MessageType;

  constructor(sender, group, utfContent, messageType: MessageType) {
    this.sender = sender;
    this.group = group;
    this.timestamp = new Date();
    this.utfContent = utfContent;
    this.innerHtml = this.getTranspiled(utfContent, messageType);
    this.messageType = messageType;
  }

  getTranspiled(content: string, messageType: MessageType): string {
    switch(messageType) {
      case MessageType.LATEX: return content;
      case MessageType.MARKDOWN: return this.parseMarkdownMessage(content);
    }
  }

  parseMarkdownMessage(content: string): string {
    return MarkdownParserService.parse(content);
  }
}
