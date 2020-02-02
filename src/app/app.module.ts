import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MessageComponent} from './message/message.component';
import {KatexModule} from "ng-katex";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login-page/login/login.component';
import {RoutesModule} from "../routes/routes.module";
import {RouterModule, RouterOutlet} from "@angular/router";



@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        LoginComponent
    ],
  imports: [
    BrowserModule,
    KatexModule,
    FormsModule,
    // RoutesModule,
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
