import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmpleadosComponent } from './Components/Empleados/list-empleados/list-empleados.component';
import { ListActividadesComponent } from './Components/Actividades/list-actividades/list-actividades.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './Components/Empleados/registrar-empleado/registrar-empleado.component';
import { RegistrarActividadComponent } from './Components/Actividades/registrar-actividad/registrar-actividad.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './Components/Empleados/actualizar-empleado/actualizar-empleado.component';
import { ActualizarActividadComponent } from './Components/Actividades/actualizar-actividad/actualizar-actividad.component';
import { EmpleadoDetallesComponent } from './Components/Empleados/empleado-detalles/empleado-detalles.component';
import { ActividadDetallesComponent } from './Components/Actividades/actividad-detalles/actividad-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    ListActividadesComponent,
    RegistrarEmpleadoComponent,
    RegistrarActividadComponent,
    ActualizarEmpleadoComponent,
    ActualizarActividadComponent,
    EmpleadoDetallesComponent,
    ActividadDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
