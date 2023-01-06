import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './Components/Empleados/list-empleados/list-empleados.component';
import { ListActividadesComponent } from './Components/Actividades/list-actividades/list-actividades.component';
import { RegistrarEmpleadoComponent } from './Components/Empleados/registrar-empleado/registrar-empleado.component';
import { RegistrarActividadComponent } from './Components/Actividades/registrar-actividad/registrar-actividad.component';
import { ActualizarEmpleadoComponent } from './Components/Empleados/actualizar-empleado/actualizar-empleado.component';
import { ActualizarActividadComponent } from './Components/Actividades/actualizar-actividad/actualizar-actividad.component';
import { EmpleadoDetallesComponent } from './Components/Empleados/empleado-detalles/empleado-detalles.component';
import { ActividadDetallesComponent } from './Components/Actividades/actividad-detalles/actividad-detalles.component';

const routes: Routes = [

  //Rutas para componentes de empleados
  {path: 'empleados', component:ListEmpleadosComponent},
  {path:'',redirectTo:'empleados', pathMatch:'full'},
  {path: 'registrar-empleado', component:RegistrarEmpleadoComponent},
  {path: 'actualizar-empleado/:id', component:ActualizarEmpleadoComponent},
  {path: 'empleado-detalles/:id', component:EmpleadoDetallesComponent},

  ///Rutas para componentes de actividades
  {path: 'actividades', component:ListActividadesComponent},
  {path: 'registrar-actividad', component:RegistrarActividadComponent},
  {path: 'actualizar-actividad/:id', component:ActualizarActividadComponent},
  {path: 'actividad-detalles/:id', component:ActividadDetallesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
