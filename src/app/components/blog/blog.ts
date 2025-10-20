import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [],
  template:`<h3>Blog Page!</h3>
  <p>Data1: {{_data?.data1}}</p>
  <p>Data2: {{_data?.data2}}</p>
 `,
  standalone:true,
})
export class Blog implements OnInit{

  constructor(private activatedRoute: ActivatedRoute) { }

  _data:any;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this._data = data;
      console.log("Route Datas:", this._data);
    });
  }
}
