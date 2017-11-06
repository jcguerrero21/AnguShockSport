import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {PistasComponent} from './pistas/pistas.component';
import {InicioComponent} from "./inicio/inicio.component";
import {PistasAlquiladasComponent} from "./pistas-alquiladas/pistas-alquiladas.component";
import {DescuentosComponent} from "./descuentos/descuentos.component";
import {RegistroComponent} from "./registro/registro.component";
import {PistasAlquiladasListaComponent} from "./pistas-alquiladas/pistas-alquiladas-lista.component";
import {PistasAlquiladasAlquilarComponent} from "./pistas-alquiladas/pistas-alquiladas-alquilar.component";

const appRoutes: Routes = [
  {path: 'pistas', component: PistasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {
    path: 'pistasAlquiladas', component: PistasAlquiladasComponent,
    children: [
      {path: '', redirectTo: 'lista-alquiladas', pathMatch: 'full'},
      {path: 'lista-alquiladas', component: PistasAlquiladasListaComponent},
      {path: 'lista-alquilar', component: PistasAlquiladasAlquilarComponent}
    ]
  },
  {path: 'descuentos', component: DescuentosComponent},
  {path: 'registro', component: RegistroComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
