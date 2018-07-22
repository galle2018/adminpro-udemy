import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: '**', component: NopagefoundComponent } // cualquier otra ruta direciona al dashboard
];

export const APP_ROUTES = RouterModule.forRoot (appRoutes, {useHash: true});
// uso el forRoot pues es nuestra rura principal. forChild es para rutas hijas
