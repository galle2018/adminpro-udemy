import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importando todos los servicios
import {
  SettingsService,
  SidebarService,
  SharedService
} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ // para proveer los servicios
    SettingsService,
    SidebarService,
    SharedService
  ],
  declarations: []
})
export class ServiceModule { }
