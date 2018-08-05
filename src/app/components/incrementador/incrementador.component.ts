import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild("txtProgress") txtProgress: ElementRef;
//con esto tengo una referencia sin improtar en que componente estoy


  @Input("nombre")
  leyenda: string = "Leyenda";
  @Input() progreso: number = 50;

  @Output("actualizaValor")
  cambioValor: EventEmitter<number> = new EventEmitter();
  // sintaxis para emitir un  numero como un evento

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log("Progreso", this.progreso);
  }

  ngOnInit() {
    // console.log("Leyenda", this.leyenda);
    //  console.log("Progreso", this.progreso);
  }

  onChanges(newValue: number) {
    console.log(newValue);

    // let elementHTML:any = document.getElementsByName('progreso')[0]; este 0 indica que queremos la primera posicion
    // let elementHTML: any = document.getElementsByName("progreso")[0];
    // console.log(elementHTML.value);

    // console.log(this.txtProgress);


    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 1;
    } else {
      this.progreso = newValue;
    }

    // elementHTML.value = this.progreso;

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 0;
    }
    if (this.progreso <= 1 && valor < 1) {
      this.progreso = 2;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
    // aqui emito el valor numerico que tenga progrego en este preciso momento

    this.txtProgress.nativeElement.focus(); // deja el foco en el elemento cambiado
  }
}
