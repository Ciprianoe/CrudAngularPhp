import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';


@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent {

Empleados:any;  
constructor(private crudService:CrudService){}

ngOnInit():void{

this.crudService.ObtenerEmpleados().subscribe(response=>{
  console.log(response);
  this.Empleados=response;
})
}

borrarEmpleado(id:any, i:any){
  console.log(id,i);
  if(window.confirm('¿Deseas Borrar este registro?')){
  this.crudService.borrarRegistro(id).subscribe( (response)=>{
    this.Empleados.splice(i,1);
  })
}
}


}
