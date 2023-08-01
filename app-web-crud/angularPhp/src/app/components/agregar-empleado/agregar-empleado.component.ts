import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent {

  formularioEmpleados:FormGroup;

  constructor(public formulario:FormBuilder, private crudService:CrudService, private router:Router){

    this.formularioEmpleados=this.formulario.group({
      nombre:[''],
      correo:['']
    })
    
  }

  enviarDatos():any{
    console.log('Enviando datos');    
    console.log(this.formularioEmpleados.value);
    this.crudService.AgregarEmpleado(this.formularioEmpleados.value).subscribe((response =>{this.router.navigateByUrl('listar');}));
    
  }

}
