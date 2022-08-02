import { RestService } from './../../Api/rest.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mostrar-estudiante',
  templateUrl: './mostrar-estudiante.component.html',
  styleUrls: ['./mostrar-estudiante.component.css']
})


export class MostrarEstudianteComponent implements OnInit {
  public arra: Array<any> = [];
  
  
  headElements = ['ID', 'Nombre', 'Correo'];
  
  constructor( 
    private RestService: RestService
   ) {
    this.RestService.getPeople().subscribe((data:any) => 
      
      this.arra = data
      ) 
    }
    
  ngOnInit(): void {
    
  }
  deleteStudent(key:any){
    console.log(key.EstudianteId)
    this.RestService.deleteStudent(key.EstudianteId).subscribe(data => console.log(data));
    window.location.reload();
  }

}
