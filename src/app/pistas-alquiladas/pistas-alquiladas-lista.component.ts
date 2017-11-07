import { Component, OnInit } from '@angular/core';

import { PistasAlquiladasService } from "./pistas-alquiladas.service";
import { PistasAlquiladas } from "./pistas-alquiladas";

@Component({
  selector: 'pistas-alquiladas-lista',
  templateUrl: './pistas-alquiladas-lista.component.html',
  styleUrls: ['./pistas-alquiladas.component.css']
})

export class PistasAlquiladasListaComponent implements OnInit {

  listaPistasAlquiladas: PistasAlquiladas[];

  constructor(
    private service: PistasAlquiladasService
  ) { }

  ngOnInit() {
    this.service.getPistasAlquiladas()
      .subscribe(
        rs => this.listaPistasAlquiladas = rs,
        er => console.log(er),
        () => console.log(this.listaPistasAlquiladas)
      );
  }

}
