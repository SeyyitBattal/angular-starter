import { Routes } from "@angular/router";
import { Home } from "../components/home/home";
import { Profile } from "../components/profile/profile";
import { Settings } from "../components/settings/settings";
import { ErrorPage } from "../components/error-page/error-page";

export const routes : Routes = [
    {path: "", redirectTo:"/home", pathMatch: "full"},
    {path:"home", component: Home},
    {path:"profile", component: Profile},
    {path:"settings", component: Settings},
    {path:"**", component: ErrorPage}
];

