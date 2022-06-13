import { NavbarModule } from './../../navbar/navbar.module';
import { MostrarEstudianteComponent } from './mostrar-estudiante.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MostrarEstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostrarEstudianteRoutingModule { }
