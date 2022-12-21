import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { CrearComponent } from './componentes/crear/crear/crear.component';
import { EditarComponent } from './componentes/editar/editar.component';

const routes: Routes = [


  {path: '',component:MostrarComponent},


  {path: 'crear/crear',component:CrearComponent},



 {path: 'editar/:id',component:EditarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
