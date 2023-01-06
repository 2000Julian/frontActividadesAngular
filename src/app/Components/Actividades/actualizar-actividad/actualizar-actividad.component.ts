import { Component, OnInit } from '@angular/core';
import { Actividad } from '../../../Class/actividad';
import { Router, ActivatedRoute } from '@angular/router';
import { ActividadService } from '../../../Services/actividad.service';
import swal from 'sweetalert2';
import { Empleado } from '../../../Class/empleado';
import { EmpleadoService } from '../../../Services/empleado.service';

@Component({
  selector: 'app-actualizar-actividad',
  templateUrl: './actualizar-actividad.component.html',
  styleUrls: ['./actualizar-actividad.component.css']
})
export class ActualizarActividadComponent implements OnInit {

  id:number;
  actividad:Actividad = new Actividad();
  empleados:Empleado[];
  constructor(private actividadService:ActividadService,private router:Router,private route:ActivatedRoute, private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.actividadService.obtenerActividadPorId(this.id).subscribe(dato =>{
      this.actividad = dato;
    },error => console.log(error));
  }

  irAlaListaDeActividades(){
    this.router.navigate(['/actividades']);
    swal('Actividad actualizada',`La actividad ${this.actividad.id_actividad} ha sido actualizada con exito`,`success`);
  }

  onSubmit(){
    this.actividadService.actualizarActividad(this.id,this.actividad).subscribe(dato => {
      this.irAlaListaDeActividades();
    },error => console.log(error));
  }

  private obtenerEmpleados(){
    this.empleadoService.obtenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

}
