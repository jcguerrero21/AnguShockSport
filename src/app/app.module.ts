import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { LoginComponent } from './login/login.component';
import { PistasComponent } from './pistas/pistas.component';
import { InicioComponent } from './inicio/inicio.component';
import { PistasAlquiladasComponent } from './pistas-alquiladas/pistas-alquiladas.component';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { RegistroComponent } from './registro/registro.component';
import { PistasAlquiladasListaComponent} from "./pistas-alquiladas/pistas-alquiladas-lista.component";
import { PistasAlquiladasAlquilarComponent} from "./pistas-alquiladas/pistas-alquiladas-alquilar.component";
import { CasaComponent } from './casa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PistasComponent,
    InicioComponent,
    PistasAlquiladasComponent,
    DescuentosComponent,
    RegistroComponent,
    PistasAlquiladasAlquilarComponent,
    PistasAlquiladasListaComponent,
    CasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
