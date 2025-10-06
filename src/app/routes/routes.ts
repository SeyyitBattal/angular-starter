import { Routes } from "@angular/router";
import { Home } from "../components/home/home";
import { Profile } from "../components/profile/profile";
import { Settings } from "../components/settings/settings";
import { ErrorPage } from "../components/error-page/error-page";
import { ProductComponent } from "../components/products/product-component";

export const routes : Routes = [
    {path: "", redirectTo:"/home", pathMatch: "full"},
    {path:"home", component: Home},
    {path:"products", component: ProductComponent},
    {path: "products/:desktop", component: ProductComponent},
    {path:"profile", component: Profile},
    {path:"settings", component: Settings},
    {path:"**", component: ErrorPage}
];

