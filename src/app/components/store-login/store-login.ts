import { Component } from '@angular/core';

@Component({
  selector: 'app-store-login',
  imports: [],
  template:`
  <h2>Store Entrance</h2>
  <input type="mail" placeholder="E-mail"><br>
  <input type="password" placeholder="Password"><br>
  <button (click)="loginButton()">Login</button>
  `,
})
export class StoreLogin {

  loginButton(){
    console.log("Logged");
  }

}
