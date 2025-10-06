import { Component } from '@angular/core';
import { products,Products } from '../products/products';

@Component({
  selector: 'app-home',
  template: `
  <div>Home Page!</div>
  <ul>
    @for (product of products; track $index) {
      <li>Product name: {{product.name}} <br>Price: {{product.price}}$</li><hr>
    }
  </ul>
  `,
  standalone: true
})
export class Home {
  products:Products[] = products;
}
