import { Component } from '@angular/core';

@Component({
  selector: 'app-custom',
  imports: [],
  template:`
  <style>
    p {
      color: turquoise;
      font-weight: bold;
      font-size: 1.5rem;
    }
  </style>
  <p>Custom Component Loaded!</p>
  `,
})
export class Custom {

}
