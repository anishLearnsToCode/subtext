import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MessageComponent} from './message/message.component';
import {KatexModule} from "ng-katex";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login-page/login/login.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import {AngularFireModule } from 'angularfire2';
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from 'angularfire2/database'

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        LoginComponent,
        DashboardComponent,
        TestComponent
    ],
  imports: [
    BrowserModule,
    KatexModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
