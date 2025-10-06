import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-component',
  imports: [],
  template:`
  <div>Product component!</div>
  `,
  standalone:true,
})
export class ProductComponent {

  constructor(private activatedRoute: ActivatedRoute){
  //  SNAPSHOT İLE YAKALAMA:
  //   var d1 = activatedRoute.snapshot.paramMap.has("xxssdd");
  //   console.log("parametre xxssdd mi? ", d1);
  //   var d2 = activatedRoute.snapshot.paramMap.has("desktop");
  //   console.log("parametre desktop mu? ", d2);
  //   var d3 = activatedRoute.snapshot.paramMap.get("desktop");
  //   console.log("route'ta yazan değer: ", d3);

  //OBSERVABLE İLE YAKALAMA (Dinamik yapı olduğu için bu kullanılmalıdır):
    activatedRoute.paramMap.subscribe({
      next: parameter => {
        console.log("paramMap ile URL'de yazan değer: " + parameter.get("desktop"));
      }
    })

    activatedRoute.params.subscribe({
      next: parameter => {
        console.log("params ile URL'de yazan değer: " + parameter["desktop"]);
      }
    })

  } 

}
