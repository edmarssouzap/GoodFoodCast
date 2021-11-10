import { Component, OnInit } from '@angular/core';

// Importa para usar a funcao back() para acionar e reconhecer o caminho de voltar em uma pagina
import { Location } from '@angular/common';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

  voltar() {
    this.location.back();
  }

}
