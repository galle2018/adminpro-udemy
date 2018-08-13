import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

       this.contarTres().then (
         mensaje => console.log('Termino', mensaje)
       )
       .catch(error => console.error ('Error en la promesa', error));

    }

  ngOnInit() { }

  contarTres(): Promise<boolean> {

    return new Promise((resolve, reject) => {

      let contador = 0;

      let intervalo = setInterval(() => {

        contador += 1;
        console.log('Numero ',contador);
        // alert('Sumo + 1 !!!');

        if (contador === 3) {
          resolve(true);
          // alert("Tarea completa!!! He llegado a 3 !!!");
          // window.alert("Hasta luego !!!");
          //  reject('Simplemente un error');
          clearInterval(intervalo); // para el contador, si no esta esto seguiria indefinidamente
        }

      }, 1000);

    });


  }


}
