import { MostrarProfesorComponent } from './../Profesor/mostrar-profesor/mostrar-profesor.component';
import { EliminarProfesorComponent } from './../Profesor/eliminar-profesor/eliminar-profesor.component';
import { AgregarProfesorComponent } from './../Profesor/agregar-profesor/agregar-profesor.component';
import { InsertarEstudianteComponent } from './../Estudiante/insertar-estudiante/insertar-estudiante.component';
import { MostrarEstudianteComponent } from './../Estudiante/mostrar-estudiante/mostrar-estudiante.component';
import { IndexProfesorComponent } from './../Profesor/index-profesor/index-profesor.component';
import { IndexEstudianteComponent } from './../Estudiante/index-estudiante/index-estudiante.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { IndexComponent } from '../index/index.component';
import { NavbarComponent } from './navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    NavbarComponent,
    IndexEstudianteComponent,
    IndexProfesorComponent,
    MostrarEstudianteComponent,
    InsertarEstudianteComponent,
    AgregarProfesorComponent,
    EliminarProfesorComponent,
    MostrarProfesorComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    FormsModule,
  ]
})
export class NavbarModule { }
