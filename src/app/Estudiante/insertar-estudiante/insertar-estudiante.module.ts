import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsertarEstudianteRoutingModule } from './insertar-estudiante-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InsertarEstudianteRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InsertarEstudianteModule { }
