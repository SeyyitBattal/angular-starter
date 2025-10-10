import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  imports: [RouterLink, RouterOutlet],
  template:`
  <div>
  <img 
  style="max-width: 50%;"
  src="https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg" 
  alt="product-1"><br>
  <a [routerLink]="['overview']">Overview</a>
  <a [routerLink]="['addCart']">Add Cart</a>
  </div>
  <router-outlet></router-outlet>
  `,
})
export class ProductsDetail {

}
