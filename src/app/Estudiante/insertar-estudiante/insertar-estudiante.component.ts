import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';



@Component({
  selector: 'app-insertar-estudiante',
  templateUrl: './insertar-estudiante.component.html',
  styleUrls: ['./insertar-estudiante.component.css'],
  
})


export class InsertarEstudianteComponent implements OnInit {
   
  nom ='';
  apellidos = '';
  email = '';
  datosEstudiante = new Array();
  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log('Hola', form);
    this.datosEstudiante.push(form);
    console.log(this.datosEstudiante);
    this.nom ='';
    this.apellidos = '';
    this.email = '';
    
    alert('Se guardo exitosamente')
  }

}
