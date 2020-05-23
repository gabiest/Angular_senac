import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio07',
  templateUrl: './exercicio07.component.html',
  styleUrls: ['./exercicio07.component.css']
})
export class Exercicio07Component implements OnInit {

  classDiv1 = 'divVisivel';
  classDiv2 = 'divInvisivel';
  classDiv3 = 'divInvisivel';
  divAtual = 'div1';

  constructor() { }

  ngOnInit(): void {
  }

  trocarDiv(): void {
    if (this.divAtual === 'div1') {
      this.divAtual = 'div2';
      this.classDiv1 = 'divInvisivel';
      this.classDiv2 = 'divVisivel';
      this.classDiv3 = 'divInvisivel';
    }
    else if (this.divAtual === 'div2') {
      this.divAtual = 'div3';
      this.classDiv1 = 'divInvisivel';
      this.classDiv2 = 'divInvisivel';
      this.classDiv3 = 'divVisivel';
    }
    else {
      this.divAtual = 'div1';
      this.classDiv1 = 'divVisivel';
      this.classDiv2 = 'divInvisivel';
      this.classDiv3 = 'divInvisivel';
    }
  }


}
