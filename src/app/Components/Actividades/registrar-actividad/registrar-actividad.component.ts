import { Component, OnInit } from '@angular/core';
import { Actividad } from '../../../Class/actividad';
import { ActividadService } from '../../../Services/actividad.service';
import { Router } from '@angular/router';
import { Empleado } from '../../../Class/empleado';
import { EmpleadoService } from '../../../Services/empleado.service';

@Component({
  selector: 'app-registrar-actividad',
  templateUrl: './registrar-actividad.component.html',
  styleUrls: ['./registrar-actividad.component.css']
})
export class RegistrarActividadComponent implements OnInit {

  actividad : Actividad = new Actividad();
  empleados:Empleado[];

  constructor( private actividadService: ActividadService, private router:Router, private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    console.log("actividad : " +this.actividad.empleadoDesignado);
    this.obtenerEmpleados();
  }

  guardarActividad(){
     this.actividadService.registrarActividad(this.actividad).subscribe(dato => {
      console.log("dato  guardado" + dato);
      this.irALaListaDeActividades();
     }, error => console.log(error));
  }

  actualizarActividad(id:number){
    this.router.navigate(['actualizar-actividad', id]);
  }

  eliminarActividad(id:number){
    this.actividadService.eliminarActividad(id).subscribe(dato => {
    console.log(dato);
    this.obtenerActividades();
  })
  }

  irALaListaDeActividades(){
    this.router.navigate(['/actividades']);
  }

  onSubmit(){
    console.log("actividad : " +this.actividad);
    this.guardarActividad();
  }

  private obtenerActividades(){
    this.actividadService.obtenerListaDeActividades().subscribe(dato => {
      //this.actividad = dato;
    });
  }

  private obtenerEmpleados(){
    this.empleadoService.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

}
