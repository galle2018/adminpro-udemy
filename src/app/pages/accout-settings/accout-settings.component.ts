import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: "app-accout-settings",
  templateUrl: "./accout-settings.component.html",
  styles: []
})
export class AccoutSettingsComponent implements OnInit {
  constructor(public _ajustes: SettingsService) {}
  //aqui importo el servicio y puedo usar todos los metodos y propiedades que tiene esto de los ajustes

  ngOnInit() {
    this.colocarCheck(); // asi que la pagina sea cargada se disparara esta funcion
  }

  // **************************************************************************************************
  // para cambiar el archivo de tema que es considerado para mi index.html
  cambiarColor(tema: string, link: any) {

    // console.log(tema, link);

    this.aplicarCheck(link);

    this._ajustes.aplicarTema(tema); // ejecuto la funcion para aplicar el tema

  }
  // **************************************************************************************************
  aplicarCheck(link) {
    // console.log("Ejecutando funcion aplicarCheck");
    let selectores: any = document.getElementsByClassName("selector");

    for (let ref of selectores) {
      // hago un rastreo en todos los selector
      ref.classList.remove("working"); //aqui elimino la clase working de todos los selectores
    }

    // con esto aggrego la clase working al elemento (v)
    link.classList.add("working");
  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName("selector");
    let tema=this._ajustes.ajustes.tema; // toma el valor del tema elegido y lo pone en la variable tema

    for (let ref of selectores) {
    if ( ref.getAttribute('data-theme')=== tema ) {
      ref.classList.add ('working');
      break; // para salir del ciclo for
    }
    }
  }
  // **************************************************************************************************

}
