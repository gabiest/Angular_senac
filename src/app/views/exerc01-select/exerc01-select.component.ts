import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerc01-select',
  templateUrl: './exerc01-select.component.html',
  styleUrls: ['./exerc01-select.component.css']
})
export class Exerc01SelectComponent implements OnInit {


  nome: '';
  curso: '';

  constructor() { }

  ngOnInit(): void {
  }

}
