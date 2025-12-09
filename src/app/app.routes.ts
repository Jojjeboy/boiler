// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard'; // Importera din guard
import { LoginComponent } from './components/login/login';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    }, 
    { 
        path: 'home', 
        component: HomeComponent,
        canActivate: [authGuard] // Skydda denna rutt
    },
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    // Lägg till en 404/wildcard rutt om du vill
    { 
        path: '**', 
        redirectTo: 'home' 
    }
];