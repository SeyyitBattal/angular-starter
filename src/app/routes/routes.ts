import { Routes } from "@angular/router";
import { Home } from "../components/home/home";
import { Profile } from "../components/profile/profile";
import { Settings } from "../components/settings/settings";
import { ErrorPage } from "../components/error-page/error-page";
import { ProductComponent } from "../components/products/product-component";
import { ProductsDetail } from "../components/products/products-detail";
import { ProductOverview } from "../components/products/product-overview";
import { AddCart } from "../components/products/add-cart";
import { StoreLogin } from "../components/store-login/store-login";
import { canActGuard, canDeactiveGuard } from "../guards/guards";
import { canActChildGuard } from "../guards/guards";

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
    {path:"profile", component: Profile},
    {path: "storeEntrance", component: StoreLogin,
        canActivate:[canActGuard],
        canDeactivate:[canDeactiveGuard],
    },
    {path:"settings", component: Settings},
    {path:"**", component: ErrorPage}
];

