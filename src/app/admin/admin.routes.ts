import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard/dashboard";
import { Users } from "./users/users";
import { Speakers } from "./speakers/speakers";
import { ConferenceForm } from "./conference-form/conference-form";

export const ADMIN_ROUTES : Routes=[
         {path:"", component:Dashboard},
         {path:"users", loadComponent:()=>import('./users/users').then(m=>m.Users)},
         {path:"speakers", loadComponent:()=>import('./speakers/speakers').then(m=>m.Speakers)},
         {path:"conference-form", loadComponent:()=>import('./conference-form/conference-form').then(m=>m.ConferenceForm)},
    
]