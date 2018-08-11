import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  // propiedades por defecto que voy a tener
  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default.css",
    tema: "default"
  };

  constructor( @Inject(DOCUMENT) private _document) {
    // para que dispare la funcion cuando cargamos la pagina o actualizamos
    this.cargarAjustes();
  }

  // *******************************************************************************************************
  // 2 funciones que me van a permitir guardar los datos en el Localstore para que sea persistente
  guardarAjustes() {
    // convierte el objeto en un string para poder grabarlo en el LocalStorage
    // console.log("Guardado en el LocalStorage");
    localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
  } // lo convierto con el JSON.stringify

  cargarAjustes() {
    if (localStorage.getItem("ajustes")) {
      // aqui compruebo si tengo ya los ajustes en el LocalStorage
      this.ajustes = JSON.parse(localStorage.getItem("ajustes")); // aqui encontrados los asigno a la variable ajustes
      // debo volver a convertirlo ahora con JSON.parse
      // console.log("Cargando del LocalStorage");

      this.aplicarTema(this.ajustes.tema); // aplico el tema del localstorage

    } else {
      // si no encuentra valores almacenados
      // console.log("Usando valores por defecto... no habia nada almacenado");
      this.aplicarTema(this.ajustes.tema); // sin no encuentra info de tema guardado aplica por defecto
    }
  }

  // aqui aplico el tema que tenga en el LocalStorage
  aplicarTema( tema: string) {

    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    // aqui tomo los datos selecionados y almaceno en el LocalStorage
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes(); // aqui lo guarda
  }

  // *******************************************************************************************************
}


// esto para restringir que tipo de informacion va permitirse en los ajustes
interface Ajustes {
  temaUrl: string;
  tema: string;
}
