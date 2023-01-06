import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad } from '../Class/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {


    //Obtiene listado de actividades
    private baseURL = "http://localhost:8080/api/actividades";

    constructor( private httpClient : HttpClient) { }
  
    //Obtenemos las actividades
    obtenerListaDeActividades():Observable<Actividad[]>{
      return this.httpClient.get<Actividad[]>(`${this.baseURL+'/listar'}`)
    }

    //Metodo para registrar actividad
    registrarActividad(actividad:Actividad): Observable<Object>{
      return this.httpClient.post(`${this.baseURL+'/guardar'}`,actividad);
    }

    //Metodo para actualizar actividad
    actualizarActividad(id:number,actividad:Actividad) : Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,actividad);
    }

    
    //Metodo para obtener o buscar una actividad
    obtenerActividadPorId(id:number):Observable<Actividad>{
      return this.httpClient.get<Actividad>(`${this.baseURL}/${id}`);
    }

    //metodo para eliminar una actividad
    eliminarActividad(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
