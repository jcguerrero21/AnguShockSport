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
import {CasaComponent} from './casa.component';

const appRoutes: Routes = [
  {path: 'pistas', component: PistasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {
    path: 'pistasAlquiladas', component: PistasAlquiladasComponent,
    children: [
      {path: 'lista-alquiladas', component: PistasAlquiladasListaComponent},
      {path: 'formulario-alquilar', component: PistasAlquiladasAlquilarComponent},
      {path: 'lista-alquiladas/:id/:fecha', component: PistasAlquiladasAlquilarComponent},
    ]
  },
  {path: 'descuentos', component: DescuentosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'casa', component: CasaComponent},
  { path: '', redirectTo: '/casa', pathMatch: 'full'}
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
