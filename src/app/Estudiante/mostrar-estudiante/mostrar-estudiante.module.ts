
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarEstudianteRoutingModule } from './mostrar-estudiante-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MostrarEstudianteRoutingModule,
    HttpClientModule
  ]
})
export class MostrarEstudianteModule { }
