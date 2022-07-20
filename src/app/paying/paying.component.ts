import { Component, OnInit } from '@angular/core';
import { PayingService } from '../services/paying.service';

@Component({
  selector: 'app-paying',
  templateUrl: './paying.component.html',
  styleUrls: ['./paying.component.css']
})
export class PayingComponent {

  min : number = 60
  max: number = 480
  step : number = 15
  rangeValue : number = 60
  price: number = 0;

  constructor(private _payingServices: PayingService) { }

  rangeChange( event: any){
    this.rangeValue = event.target.value;
  }

  inputChanges( event: any){
    this.price = +event.target.value;
  }

  mostrarHora(){
    return this._payingServices.calcularHora(this.rangeValue)
  }

  mostrarResultado(){
    return this._payingServices.calcularResultado(this.price, this.rangeValue)
  }

}
