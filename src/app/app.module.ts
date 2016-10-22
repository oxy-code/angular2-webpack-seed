import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import "materialize-css";
import "angular2-materialize";
import {MaterializeDirective} from "angular2-materialize";
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
  	AppComponent,
  	MaterializeDirective,
  	NavbarComponent,
  	TodoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }