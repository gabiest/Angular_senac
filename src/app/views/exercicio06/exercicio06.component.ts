import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio06',
  templateUrl: './exercicio06.component.html',
  styleUrls: ['./exercicio06.component.css']
})
export class Exercicio06Component implements OnInit {

personagem = '';


  constructor() { }

  ngOnInit(): void {
  }

  trocaperso(nome: string): void{

  this.personagem = nome;

  }

}
