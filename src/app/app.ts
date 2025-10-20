import { Component } from '@angular/core';
import { RouterOutlet,RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomModule } from './custom/custom-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RouterLink, FormsModule, CustomModule],
  template:`
  <h1>Angular</h1>
  <a routerLinkActive="active" routerLink="home">Home</a> |
  <a routerLinkActive="active" routerLink="products">Products</a> |
  <a routerLinkActive="active" routerLink="photos">Photos</a> |
  <a routerLinkActive="active" routerLink="blog">Blog</a> |
  <a routerLink="active" routerLink="storeEntrance">Store Entrance</a> |
  <a routerLinkActive="active" routerLink="settings">Settings</a> <br>
  <hr>
  <router-outlet></router-outlet>
  `,
  standalone:true,
  providers: [HttpClient]
})

export class App {
 
}
