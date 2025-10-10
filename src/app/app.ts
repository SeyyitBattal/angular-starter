import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule],
  template:`
  <h1>Angular</h1>
  <a routerLinkActive="active" routerLink="home">Home</a> |
  <a routerLinkActive="active" routerLink="products">Products</a> |
  <a routerLinkActive="active" routerLink="profile">Profile</a> |
  <a routerLink="active" routerLink="storeEntrance">Store Entrance</a> |
  <a routerLinkActive="active" routerLink="settings">Settings</a> <br>
  <hr>
  <router-outlet></router-outlet>
  `,
})

export class App {
 
}
