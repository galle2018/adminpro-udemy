import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styles: []
})
export class ProgressComponent implements OnInit {
  // progreso: number = 50;
  progreso1: number = 20;
  progreso2: number = 30;
  resultado: number = 0;
  accion: string ="** Resultado segun operacion elegida **";

  constructor() {}

  ngOnInit() {}

  cerar() {this.resultado = 0; }
  suma() { this.resultado = this.progreso1 + this.progreso2; this.accion ="******* Sumando ambos valores *******" }
  resta() {this.resultado = this.progreso1 - this.progreso2; this.accion ="******* Restando el 2 al 1 *******"}
  multiplicar() { this.resultado = this.progreso1 * this.progreso2; this.accion ="******* Multiplicando ambos valores *******"}
  dividir() { this.resultado = this.progreso1 / this.progreso2; this.accion ="******* Dividiendo el 1 entre el 2 *******"}
  porcentaje() { this.resultado = this.progreso1 * this.progreso2 / 100; this.accion ="******* El porcentaje usando el 2 del 1 *******"}
  raizcuad() { this.resultado = this.progreso1 * this.progreso1; this.accion ="******* El 1 al cuadrado *******"}

  }

  // actualizar(event: number) {
  //   console.log("Evento: ", event);
  //   this.progreso1 = event;
  // }

// }
