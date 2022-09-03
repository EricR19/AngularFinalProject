import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import Swal from 'sweetalert2';
import { RestService } from './../../Api/rest.service';


@Component({
  selector: 'app-insertar-estudiante',
  templateUrl: './insertar-estudiante.component.html',
  styleUrls: ['./insertar-estudiante.component.css'],
  
})


export class InsertarEstudianteComponent implements OnInit {
  nombre: string | '';
  email: string|'';
  
   constructor( 
    private RestService: RestService,
   ) {
    
    }
    
  ngOnInit(): void {
  }

  onSubmit(form: any){
    this.RestService.setEstudiante(this.nombre, this.email).subscribe((data:any) => 
      
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    
      ) 
      this.clear();
  }

  clear(){

    this.email = '';
    this.nombre = '';
  }

}
