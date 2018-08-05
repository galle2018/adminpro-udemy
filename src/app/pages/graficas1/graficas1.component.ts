import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  // ****************** INICIO GRAFICA DUNA ******************
  // public doughnutChartLabels: string[] = [
  //   'Download Sales',
  //   'In-Store Sales',
  //   'Mail-Order Sales',
  //   'Chat Sales'
  // ];
  // public doughnutChartData: number[] = [350, 450, 100, 200];
  // public doughnutChartType: string = 'doughnut';

  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data': [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data': [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data': [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };

  // ****************** FIN GRAFICA DUNA ******************

  // // ****************** INICIO GRAFICA BARRAS ******************
  // public barChartOptions: any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType: string = "bar";
  // public barChartLegend: boolean = true;

  // public barChartData: any[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //   { data: [18, 28, 20, 39, 56, 17, 70], label: 'Series C' }
  // ];

  // // events
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }

  // public randomize(): void {
  //   // Only Change 3 values
  //   let data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     Math.random() * 100,
  //     56,
  //     Math.random() * 100,
  //     40
  //   ];
  //   let clone = JSON.parse(JSON.stringify(this.barChartData));
  //   clone[0].data = data;
  //   this.barChartData = clone;
  //   /**
  //    * (My guess), for Angular to recognize the change in the dataset
  //    * it has to change the dataset variable directly,
  //    * so one way around it, is to clone the data, change it and then
  //    * assign it;
  //    */
  // }
  // // ****************** FIN GRAFICA BARRAS ******************

  // // ****************** INICIO Pie Chart ******************
  // // Pie
  // public pieChartLabels: string[] = [
  //   'Download Sales',
  //   'In-Store Sales',
  //   'Mail Sales',
  //   'Chat Sales'
  // ];
  // public pieChartData: number[] = [300, 500, 100, 400];
  // public pieChartType: string = 'pie';

  // // events
  // public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }
  // // ****************** FIN Pie Chart ******************

  constructor() {}

  ngOnInit() {}
}
