import { Component } from '@angular/core';
import { products,Products } from '../products/products';
import { Custom } from "../../custom/custom";

@Component({
  selector: 'app-home',
  template: `
  <ul>
    @for (product of products; track $index) {
      <li>Product name: {{product.name}} <br>Price: {{product.price}}$</li><hr>
    }
  </ul>
  <app-custom></app-custom>
  `,
  standalone: true,
  imports: [Custom]
})
export class Home {
  products:Products[] = products;
}
