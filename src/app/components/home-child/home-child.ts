import { Component } from '@angular/core';

@Component({
  selector: 'app-home-child',
  imports: [],
  template:`
  <div style="background-color: darkviolet;">
    <p>HomeChild component!</p>
 <ng-content></ng-content>
 </div>
  `,
  standalone:true,
})
export class HomeChild {

}
