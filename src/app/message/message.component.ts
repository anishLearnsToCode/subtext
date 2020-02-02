import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() sender: string;
  @Input() timestamp: Date;

  constructor() { }

  ngOnInit() {
  }

}
