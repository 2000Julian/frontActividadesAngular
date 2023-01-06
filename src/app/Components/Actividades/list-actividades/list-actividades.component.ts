import { Component, OnInit } from '@angular/core';
import { Actividad } from '../../../Class/actividad';
import { ActividadService } from '../../../Services/actividad.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-actividades',
  templateUrl: './list-actividades.component.html',
  styleUrls: ['./list-actividades.component.css']
})
export class ListActividadesComponent implements OnInit {

  actividades:Actividad[];
  constructor( private actividadService: ActividadService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerActividades();
  }

  private obtenerActividades(){
    this.actividadService.obtenerListaDeActividades().subscribe(dato => {
      this.actividades = dato;
    });
  }

  verDetallesDeLaActividad(id:number){
    this.router.navigate(['actividad-detalles',id]);
  }

  actualizarActividad(id:number){
    this.router.navigate(['actualizar-actividad', id]);
  }

  eliminarActividad(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la actividad",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínala',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.actividadService.eliminarActividad(id).subscribe(dato => {
          console.log(dato);
          this.obtenerActividades();
          swal(
            'Actividad eliminada',
            'La actividad ha sido eliminada con exito',
            'success'
          )
        })
      }
    })
  }

}
