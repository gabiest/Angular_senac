import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.css']
})
export class Exercicio03Component implements OnInit {

  styleClass = 'petroleo';
  paraMaiuscula(palavra: string ): string{
    return palavra.toLocaleUpperCase();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
