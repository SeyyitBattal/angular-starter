import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule],
  template:`
  <h1>Hello world!</h1>
  <a routerLink="home">Home</a> |
  <a routerLink="profile">Profile</a> |
  <a routerLink="settings">Settings</a> <br>
  <hr>
  <router-outlet></router-outlet>
  `
})

export class App {

}
