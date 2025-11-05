import { Component } from '@angular/core';
import { products,Products } from '../products/products';
import { FormsModule } from "@angular/forms";
import { HomeChild } from "../home-child/home-child";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: 'app-home',
  template: `

  <ul>
    @for (product of products; track $index) {
      <li>Product name: {{product.name}} <br>Price: {{product.price}}$</li><hr>
    }
  </ul>

  <input type="text" [(ngModel)] = "data">
  {{data}}

  <app-home-child>
    <header>ng-content HEADER</header>
    <!-- <body>ng-content BODY</body> -->
    <footer>ng-content FOOTER</footer>
    <div class="footerInfo">Footer information line</div>
    </app-home-child>

    <ng-container *ngTemplateOutlet= "templateArea">
      ng-container içeriği... 
    </ng-container>
    <ng-template #templateArea>
      ng-template içeriği...
    </ng-template>

  `,
  standalone: true,
  imports: [FormsModule, HomeChild, NgTemplateOutlet]
})
export class Home {
  products:Products[] = products;
  data : any;
}
