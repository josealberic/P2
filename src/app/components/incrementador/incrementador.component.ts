import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
  }
  @Input() leyenda:string="leyenda";
  @Input() progreso:number=50;
  @Output() cambiovalor:EventEmitter<number>= new EventEmitter();

  public incrementar(valor:number){
    if(this.progreso>=100 && this.progreso>0){
      this.progreso=100;
      return;
    }
    if(this.progreso<=0 && this.progreso>0){
      this.progreso=0;
      return;
    }
    this.progreso=valor+this.progreso;
    this.cambiovalor.emit(this.progreso);
  }

}
