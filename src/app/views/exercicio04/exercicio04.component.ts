import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrls: ['./exercicio04.component.css']
})
export class Exercicio04Component implements OnInit {

  img1 = 'assets/31952445_1816535625080607_2088345865344253952_n.jpg';
  img2 = 'assets/37398784_1913769462023889_5737849327024340992_n.jpg';
  img3 = 'assets/76944514_2724407387626755_4828032089586663424_n.jpg';

Class1 = 'gab1';
Class2 = 'gab2';
Class3 = 'gab3';


  constructor() { }

  ngOnInit(): void {
  }

}
