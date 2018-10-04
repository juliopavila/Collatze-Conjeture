import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @Input ("sequence") sequence; //Obtenemos el valor escrito en el input
  sequenceList: Array <any> = []; //Arreglo de la secuencia de numeros
  continue : boolean = true; //Bool para determinar si continuamos

  constructor(public navCtrl: NavController) {
  }

  //Metodo para observar que tipo de numero es
  checkSequence(num : number){
    while(this.continue == true){
      if (num == 1){ //Si el numero = 1 la conjetura esta completa
        this.continue = false;
        console.log("Collatz Conjeture Complete!");
        break;
      }
      if (num % 1 === 0){ //Comprobamos si el numero es entero
        (num%2)?this.oddNumber(num):this.evenNumber(num); //Ternario para determinar si es par o impar
      }
      if (num % 1 !== 0){ //Comprabamos si el numero es decimal
        this.continue = false;
        break;
      }
    }
  }

  //Metodo para aplicar la conjetura si el numero es par
  evenNumber(num : number) {
    let op = num/2;
    this.sequenceList.push(op);
    this.checkSequence(op);
  }

  //Metodo para aplicar la conjetura si el numero es impar
  oddNumber(num : number) {
    let op = (num*3)+1;
    this.sequenceList.push(op);
    this.checkSequence(op);
  }

  //Metodo para limpiar el arreglo y el input permitiendo volver aplicar la conjetura con otro numero
  reset() {
    this.sequenceList = [];
    this.continue = true;
    this.sequence = " ";
  }
}
