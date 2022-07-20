import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayingService {

  calcularHora(minute: number): string{
    let horas : string = ""

    if(minute >= 60 && minute < 120){
      horas = "1 hora ";
    }else{
      horas = Math.floor((minute / 60)).toString() + " horas "
    }

    const minutosRestante = minute % 60;
    horas = (minutosRestante > 0 ) ?  horas + "y " + minutosRestante.toString() + " minutos" : horas ;

    return horas.trim();
  }

  calcularResultado(price:number,minute:number){

    const pricePerMinute = (price / 60)

    return pricePerMinute * minute;

  }
}
