import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalificacionComponent } from './componentes/calificacion/calificacion.component';
import { VehiculoComponent } from './paginas/vehiculo/vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    CalificacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
