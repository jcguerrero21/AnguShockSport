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
  imgFutbol: string;
  imgFutsal: string;
  imgBasket: string;
  imgPadel: string;
  imgTenis: string;
  imgAtleta: string;
  imgNadador: string;
  imgEquipoBaloncesto: string;

  constructor() {
    this.imgSalida = 'assets/imagenes/salida.jpg';
    this.imgIcono = 'assets/imagenes/icono.png';
    this.imgFutbol = 'assets/imagenes/futbol.jpg';
    this.imgFutsal =  'assets/imagenes/futsal.jpg';
    this.imgBasket = 'assets/imagenes/basket.jpg';
    this.imgPadel = 'assets/imagenes/padel.jpg';
    this.imgTenis = 'assets/imagenes/tenis1.jpg';
    this.imgAtleta = 'assets/imagenes/atleta.jpg';
    this.imgNadador = 'assets/imagenes/nadador.jpg';
    this.imgEquipoBaloncesto = 'assets/imagenes/baloncesto.jpg';
  }

  ngOnInit() {
    $( document ).ready(function(){
      $('#btnMenu').sideNav(); //botón menú formato responsive
      $('.slider').slider();
    });

    $('.carousel.carousel-slider').carousel({fullWidth: true});

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
