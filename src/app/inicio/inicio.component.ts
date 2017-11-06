import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  imgFutbol: string;
  imgFutsal: string;
  imgBasket: string;
  imgPadel: string;
  imgTenis: string;
  imgAtleta: string;
  imgNadador: string;
  imgEquipoBaloncesto: string;

  constructor() {
    this.imgFutbol = '../../assets/imagenes/futbol.jpg';
    this.imgFutsal =  '../../assets/imagenes/futsal.jpg';
    this.imgBasket = '../../assets/imagenes/basket.jpg';
    this.imgPadel = '../../assets/imagenes/padel.jpg';
    this.imgTenis = '../../assets/imagenes/tenis1.jpg';
    this.imgAtleta = '../../assets/imagenes/atleta.jpg';
    this.imgNadador = '../../assets/imagenes/nadador.jpg';
    this.imgEquipoBaloncesto = '../../assets/imagenes/baloncesto.jpg';
  }

  ngOnInit() {
    $( document ).ready(function(){
      $('.slider').slider();
    });

    $('.carousel.carousel-slider').carousel({fullWidth: true});
  }

}
