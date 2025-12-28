import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { AboutComponent } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { PrivateHeaderComponent } from './private-header/private-header';
import { Gallery } from './gallery/gallery';
import { Crud } from './crud/crud-list/crud';
import { Profile } from './profile/profile';


export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'about', component: AboutComponent},
    { path: 'private-page', component: PrivateHeaderComponent},
    { path: 'dashboard', component: Dashboard},
    { path: 'gallery', component: Gallery},
    { path: 'crud', component: Crud},
    { path: 'profile', component: Profile},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
