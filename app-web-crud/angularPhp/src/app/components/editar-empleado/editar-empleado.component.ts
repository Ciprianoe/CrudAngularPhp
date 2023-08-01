import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms'
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent {
formularioEmpleados!:FormGroup;  
id:any;
  constructor(private activeRoute:ActivatedRoute,private crudService:CrudService,private formulario:FormBuilder, private router:Router){}

  ngOnInit():void {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.crudService.obtenerEmpleado(this.id).subscribe((response) =>{
      console.log(response)
      this.formularioEmpleados.setValue({
        nombre:response[0]['nombre'],
        correo:response[0]['correo']
      });
    });
      this.formularioEmpleados=this.formulario.group({
        nombre:[''],
        correo:['']

      });
    
      

  }

  enviarDatos():any{
    console.log(this.id);
    console.log(this.formularioEmpleados.value);
    this.crudService.actualizarDatos(this.id, this.formularioEmpleados.value).subscribe(()=>{
      this.router.navigateByUrl('listar');
    });
   
  }




}
