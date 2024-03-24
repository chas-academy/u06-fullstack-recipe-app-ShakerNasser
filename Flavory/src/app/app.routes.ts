import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainsComponent } from './pages/mains/mains.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { StartersComponent } from './pages/starters/starters.component';
import { SiteNotFoundComponent } from './pages/site-not-found/site-not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
0

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'mains', component: MainsComponent },
    { path: 'desserts', component: DessertsComponent },
    { path: 'starters', component: StartersComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: SiteNotFoundComponent }, // Wildcard route for handling all other routes
  ];
