import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs/Rx';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    // this.regresaObservable().pipe(
    //   retry(2)
    // )

    this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log('Subs ', numero),
      error => console.error('Error en el obs', error),
      () => console.log( 'El observador termino!!' )
    );

  }

  ngOnInit() {
    console.log('Estas en la Pagina!!!');
    alert('Entrando a la Pagina!!!');
  }

  ngOnDestroy(){
    console.log('Has salido de la pagina!!!');
    alert('Saliendo de la pagina!!!');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      let intervalo = setInterval(() => {

        contador ++;

        const salida={
          valor: contador
        };

        observer.next(salida);

        // if (contador === 10) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        
        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('Auxilio!!');
        // }

      }, 1000);

    }).pipe(
      map( resp => resp.valor),
      filter((valor, index) => {
        // console.log('Filter', valor, index)

        if ((valor%2)===1){
          //impar
          return true;
        }else{
          //par
          return false;
        }
        
      })
    );

  }


}
