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
  <hr>

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
    <br>

  <!--Veri gönderilecekse aşağıdaki 2 şekilde uygulanır.-->
  <!--Uygulama 1-->
    <ng-container [ngTemplateOutlet]= "tempTemp" [ngTemplateOutletContext]="{numberData1: 123, numberData2:456, numberData3: 789}">
      Container area!
    </ng-container>
    <ng-template #tempTemp let-number1="numberData1" let-number2="numberData2" let-number3="numberData3">
      Template area! <br>
      number 1: {{number1}} <br>
      number 2: {{number2}} <br>
      number 3: {{number3}} <br>
    </ng-template>
  <!--Uygulama 2-->
    <ng-container *ngTemplateOutlet="personTemplate; context: {$implicit: person}" >
    </ng-container>
    <ng-template #personTemplate let-person>
      <ul>
      @for (human of person; track $index) {
        <li>
        {{human.pName}} - yaş: {{human.age}}
        </li>
      }
      </ul>
    </ng-template>

  `,
  standalone: true,
  imports: [FormsModule, HomeChild, NgTemplateOutlet]
})

export class Home {
  products:Products[] = products;
  data : any;
  person : any[] = [
    {pName : "Ahmet", age : 12},
    {pName : "Ali", age : 53},
    {pName : "Veli", age : 43},
    {pName : "Ayşe", age : 76},
    {pName : "Hasan", age : 24}
  ] 
}
