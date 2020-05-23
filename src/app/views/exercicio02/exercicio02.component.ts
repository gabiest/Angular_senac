import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.css']
})
export class Exercicio02Component implements OnInit {

paraMaiuscula(palavra: string ): string{
return palavra.toLocaleUpperCase();
}

  constructor() { }

  ngOnInit(): void {
  }

}
