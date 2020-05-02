import {Component, Input, OnInit} from '@angular/core';
import {ClipboardService} from "../services/clipboard.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() sender: string;
  @Input() timestamp: Date;
  @Input() utf8Message: string;

  constructor() { }

  ngOnInit() {
  }

  copyToClipboard(): void {
    ClipboardService.set(this.utf8Message);
  }
}
