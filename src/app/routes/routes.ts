import { Routes } from "@angular/router";
import { Home } from "../components/home/home";
import { Photos } from "../components/photos/photos";
import { Settings } from "../components/settings/settings";
import { ErrorPage } from "../components/error-page/error-page";
import { ProductComponent } from "../components/products/product-component";
import { ProductsDetail } from "../components/products/products-detail";
import { ProductOverview } from "../components/products/product-overview";
import { AddCart } from "../components/products/add-cart";
import { StoreLogin } from "../components/store-login/store-login";
import { canActGuard, canDeactiveGuard } from "../guards/guards";
import { canActChildGuard } from "../guards/guards";
import { Blog } from "../components/blog/blog";
import { Account } from "../components/account/account";
import { Favorities } from "../components/favorities/favorities";

export const routes : Routes = [
    {path: "", redirectTo:"/home", pathMatch: "full"},
    {path:"home", component: Home},
    {path:"products", component: ProductComponent,
        children: [
            {path:"detail/:id", component: ProductsDetail,
                children: [
                    {path:"overview", component: ProductOverview},
                    {path:"addCart", component: AddCart}
                ],
                canActivateChild:[
                    canActChildGuard
                ],
            }, 
        ] 
    },
    {path: "products/:desktop", component: ProductComponent},
    {path:"photos", component: Photos},
    {path:"blog", component: Blog, 
        data:{ data1: "data1 from route data passing" , data2: "data2 from route data passing"} 
    },
    {path: "storeEntrance", component: StoreLogin,
        canActivate:[canActGuard],
        canDeactivate:[canDeactiveGuard],
    },
{
  path: "account",
  loadChildren: () => import("../components/account/account-module").then(m => m.AccountModule)
},
    {path:"favorities", 
        loadChildren: () => import("../components/favorities/favorities-module").then(m => m.FavoritiesModule)},
    {path:"settings", component: Settings},
    {path:"**", component: ErrorPage}
];

