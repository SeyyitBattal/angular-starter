import { Component } from '@angular/core';
import { products,Products } from '../products/products';
import { Custom } from "../../custom/custom";
import { FormsModule } from "@angular/forms";
import { HomeChild } from "../home-child/home-child";

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
  <app-home-child>
    <header>ng-content HEADER</header>
    <!-- <body>ng-content BODY</body> -->
    <footer>ng-content FOOTER</footer>
    <div class="footerInfo">Footer information line</div>
    </app-home-child>
  `,
  standalone: true,
  imports: [Custom, FormsModule, HomeChild]
})
export class Home {
  products:Products[] = products;
  data : any;
}
