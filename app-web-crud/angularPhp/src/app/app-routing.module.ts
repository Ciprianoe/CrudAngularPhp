import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';


const routes: Routes = [
/* {path: '**', redirectTo:'agregar',pathMatch: 'full'},
{path:'', component:AgregarEmpleadoComponent}, */
{path:'agregar',component:AgregarEmpleadoComponent},
{path:'listar',component:ListarEmpleadoComponent},
{path:'editar/:id',component:EditarEmpleadoComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
