import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "app-grafico-dona",
  templateUrl: "./grafico-dona.component.html",
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutChartData: number[] = [];
  @Input('chartType') doughnutChartType: string = "";
  // el @Input para traer los datos desde del componente padre graficas1.component
  constructor() {}

  ngOnInit() {}
}
