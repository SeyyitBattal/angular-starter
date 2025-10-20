import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Custom } from './custom';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Custom,
  ], 
  exports: [
    Custom
  ],
})
export class CustomModule { }
