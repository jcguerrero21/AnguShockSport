import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  imgIcono: string;
  imgSalida: string;

  constructor() {
    this.imgSalida = 'assets/imagenes/salida.jpg';
    this.imgIcono = 'assets/imagenes/icono.png';
  }

  ngOnInit() {
    $( document ).ready(function(){
      $('#btnMenu').sideNav(); //botón menú formato responsive
    });

    //login
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );
  }
}
