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
import { RecipeComponent } from './pages/recipe/recipe.component';
import { authGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
0

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'mains', component: MainsComponent },
    { path: 'desserts', component: DessertsComponent },
    { path: 'admin', component: AdminComponent, canActivate:[authGuard] },
    { path: 'starters', component: StartersComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'recipe/:id', component: RecipeComponent },

    { path: '**', component: SiteNotFoundComponent }, // Wildcard route for handling all other routes
  ];
