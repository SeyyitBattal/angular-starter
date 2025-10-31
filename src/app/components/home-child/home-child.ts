import { Component } from '@angular/core';

@Component({
  selector: 'app-home-child',
  imports: [],
  template:`
  <div>
 <ng-content select="header"></ng-content>
 <ng-content select="body"></ng-content>
 <ng-content select="footer"></ng-content>
 <ng-content select=".footerInfo"></ng-content>
 </div>
  `,
  standalone:true,
})
export class HomeChild {

}
