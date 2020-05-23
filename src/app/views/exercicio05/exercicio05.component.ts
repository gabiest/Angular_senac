import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio05',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.css']
})
export class Exercicio05Component implements OnInit {

  img1 = 'assets/naruto.png';
img2 = 'assets/kakashi.jpg';

  constructor() { }

  ngOnInit(): void {
  }
  tratarclick(): void{
    if (this.img1 === 'assets/naruto.png')
{  this.img1 = this.img2;
}else{
  this.img1 = 'assets/naruto.png';
}
  }

}
