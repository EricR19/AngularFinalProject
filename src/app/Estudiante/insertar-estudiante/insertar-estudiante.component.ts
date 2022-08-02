import { Component, OnInit } from '@angular/core';
import { RestService } from './../../Api/rest.service';


@Component({
  selector: 'app-insertar-estudiante',
  templateUrl: './insertar-estudiante.component.html',
  styleUrls: ['./insertar-estudiante.component.css'],
  
})


export class InsertarEstudianteComponent implements OnInit {
  nombre: string=''
  email: string=''
  
   constructor( 
    private RestService: RestService,
   ) {
    
    }
    
  ngOnInit(): void {
  }

  onSubmit(form: any){
    this.RestService.setEstudiante(this.nombre, this.email).subscribe((data:any) => 
      
      console.log(`Se guardo exitosamente ${data}` )
      ) 
  }

}
