import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerc01',
  templateUrl: './exerc01.component.html',
  styleUrls: ['./exerc01.component.css']
})
export class Exerc01Component implements OnInit {

  n1: number;
  n2: number;
  n3: number;

  constructor() { }

  ngOnInit(): void {
  }

  conta(): number {
    this.n3=this.n1+this.n2;

    return this.n3;
  }
}
