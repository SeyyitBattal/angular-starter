import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-photos',
  template: `
  <div>Photos Page!</div>
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
  
  imports: [RouterLink, RouterOutlet],
})
export class Photos implements OnInit {
 private httpClient = inject(HttpClient);

photos: any;
ngOnInit(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/photos")
      .subscribe(photos => this.photos = photos)
}

}
