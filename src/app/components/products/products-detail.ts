import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  imports: [RouterLink, RouterOutlet],
  template:`
  <div>You are in product-1 detail page! <br>
  <a [routerLink]="['overview']">Overview</a>
  <a [routerLink]="['addCart']">Add Cart</a>
  </div>
  <router-outlet></router-outlet>
  `,
})
export class ProductsDetail {

}
