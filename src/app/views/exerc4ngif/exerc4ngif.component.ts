import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerc4ngif',
  templateUrl: './exerc4ngif.component.html',
  styleUrls: ['./exerc4ngif.component.css']
})
export class Exerc4ngifComponent implements OnInit {

  n1: number;
  n2: number;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(sinal: string) {
    if (sinal === 'soma') {
      this.result = this.n1 + this.n2;
    } else if (sinal === 'subt') {
      this.result = this.n1 - this.n2;
    } else if (sinal === 'mult') {
      this.result = this.n1 * this.n2;
    } else if (sinal === 'divi') {
      this.result = this.n1 / this.n2;
    }

  }
}
