import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerc5ngfor',
  templateUrl: './exerc5ngfor.component.html',
  styleUrls: ['./exerc5ngfor.component.css']
})
export class Exerc5ngforComponent implements OnInit {

  DogsImg = [ 'labrador.jpg', 'golden.jpg',
  'akita.jpg'];

constructor() { }

ngOnInit(): void {
}

mostrarNome(nome: string) {
alert(nome);
}

}

