import { Component } from '@angular/core';
import { products,Products } from '../products/products';
import { Custom } from "../../custom/custom";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-home',
  template: `
  <ul>
    @for (product of products; track $index) {
      <li>Product name: {{product.name}} <br>Price: {{product.price}}$</li><hr>
    }
  </ul>
  <app-custom></app-custom>
  <input type="text" [(ngModel)] = "data">
  {{data}}
  `,
  standalone: true,
  imports: [Custom, FormsModule]
})
export class Home {
  products:Products[] = products;
  data : any;
}
