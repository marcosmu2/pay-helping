import { Component, OnInit } from '@angular/core';
import { PayingService } from '../services/paying.service';

@Component({
  selector: 'app-paying',
  templateUrl: './paying.component.html',
  styleUrls: ['./paying.component.css']
})
export class PayingComponent {

  min : number = 60;
  max: number = 480;
  step : number = 15;
  rangeValue : number = 60;
  price: number = 0;
  showError: boolean = false;
  showErrorGreater: boolean = false;

  constructor(private _payingServices: PayingService) { }

  rangeChange( event: any){
    this.rangeValue = event.target.value;
  }

  inputChanges( event: any){

    this.showError = false;
    this.showErrorGreater = false;
    const newPrice = +event.target.value;

    if(newPrice < 0){
      this.price = 0;
      this.showError = true;
    }else if(newPrice > 10000000){
      this.price = 10000000;
      this.showErrorGreater = true
    }
    else{
      this.price = newPrice;
    }
  }

  mostrarHora(){
    return this._payingServices.calcularHora(this.rangeValue)
  }

  mostrarResultado(){
    return this._payingServices.calcularResultado(this.price, this.rangeValue)
  }

}
