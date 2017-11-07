import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'pistas-alquiladas-alquilar',
  templateUrl: './pistas-alquiladas-alquilar.component.html',
  styleUrls: ['./pistas-alquiladas.component.css']
})

export class PistasAlquiladasAlquilarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    let fecha = this.route.snapshot.params['fecha'];

    if(!id) return;
    if(!fecha) return;

    console.log(id);
    console.log(fecha);
  }

}
