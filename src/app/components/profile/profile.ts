import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-profile',
  template: `
  <div>Profile Page!</div>

  <router-outlet></router-outlet>

  <br>
  <ul>
    @for (photo of photos; track $index) {
    <li>
      <a [routerLink]="[photo.id]">{{photo.url}}</a>
    </li>
    }
  </ul>
  `,
  standalone:true,
  imports: [RouterLink, RouterOutlet],
})
export class Profile implements OnInit {

  constructor(private httpClient : HttpClient){}

photos: any;
ngOnInit(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/photos")
      .subscribe(photos => this.photos = photos)
}

}
