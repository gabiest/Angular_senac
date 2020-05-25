import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerc6ngfor',
  templateUrl: './exerc6ngfor.component.html',
  styleUrls: ['./exerc6ngfor.component.css']
})
export class Exerc6ngforComponent implements OnInit {

  Paises = [ 'Brasil', 'Estados Unidos',
  'Agentina', 'Mexico'];

  capitais = ['Brasilia', 'Washington', 'Buenos aires', 'cidade do mexico'];

constructor() { }

ngOnInit(): void {
}

mostrar(i: string) {
  alert(this.capitais[i]);
}

}
