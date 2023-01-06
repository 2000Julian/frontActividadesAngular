import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actividad } from '../../../Class/actividad';
import { ActividadService } from '../../../Services/actividad.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actividad-detalles',
  templateUrl: './actividad-detalles.component.html',
  styleUrls: ['./actividad-detalles.component.css']
})
export class ActividadDetallesComponent implements OnInit {

  id:number;
  actividad:Actividad;
  constructor(private route:ActivatedRoute, private actividadService:ActividadService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.actividad = new Actividad();
    this.actividadService.obtenerActividadPorId(this.id).subscribe(dato =>{
      this.actividad = dato;
      swal(`Detalles de la actividad ${this.actividad.id_actividad}`);
    })
  }


}
