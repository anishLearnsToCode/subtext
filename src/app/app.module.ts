import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MessageComponent} from './message/message.component';
import {KatexModule} from "ng-katex";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
    ],
  imports: [
    BrowserModule,
    KatexModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
