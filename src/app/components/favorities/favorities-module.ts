import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteSettings } from './favorite-settings';
import { FavoriteProducts } from './favorite-products';
import { RouterModule } from '@angular/router';
import { Favorities } from './favorities';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: Favorities },
      { path: "settings", component: FavoriteSettings },
      { path: "products", component: FavoriteProducts },
    ]),
    Favorities,
    FavoriteSettings,
    FavoriteProducts,
  ],
})
export class FavoritiesModule { }
