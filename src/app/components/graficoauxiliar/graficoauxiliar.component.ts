import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-graficoauxiliar',
  templateUrl: './graficoauxiliar.component.html',
  styles: []
})
export class GraficoauxiliarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Doughnut
  @Input() doughnutChartLabels:string[] = [];
  @Input() doughnutChartData:number[] = [];
  @Input() doughnutChartType:string = '';

}
