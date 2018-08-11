import { SettingsService } from './services/service.index';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _ajustes: SettingsService){
// con solo inyectarlo aqui ya va disparar el constructor del servicio ejecutando la funcion cargarAjustes()
  }
}
