import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pageRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: "progress", component: ProgressComponent, data: {titulo: 'Progress'} },
      { path: "graficas1", component: Graficas1Component, data: {titulo: 'Graficas'} },
      { path: "promesas", component: PromesasComponent, data: {titulo: 'Promesas'} },
      { path: "observables", component: RxjsComponent, data: {titulo: 'Observables RxJs'} },
      { path: "account-settings", component: AccoutSettingsComponent, data: {titulo: 'Ajustes del Tema'} },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" } // cualquier ruta vacia me direciona al dashboard
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
