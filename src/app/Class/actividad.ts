export class Actividad {

    id_actividad:number;
    descripcion:String;
    fechaEstimada:String;
    estado:String;
    empleadoDesignado:String;
    empleadoId:{
        id_empleado: number,
        nombre:String,
        apellidos:String,
        correo:String,
        num_identificacion:String
    }
    
}
