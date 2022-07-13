import { RestService } from './../../Api/rest.service';

import { Component, OnInit } from '@angular/core';
import { computeStyles } from '@popperjs/core';


@Component({
  selector: 'app-mostrar-estudiante',
  templateUrl: './mostrar-estudiante.component.html',
  styleUrls: ['./mostrar-estudiante.component.css']
})


export class MostrarEstudianteComponent implements OnInit {
  
  public arra: Array<any> = []

  elements: any = [
    {id: 1, Nombre: 'Mark', Apellido: 'Otto', Correo: '@mdo', Nota: 60},
    {id: 2, Nombre: 'Jacob', Apellido: 'Thornton', Correo: '@fat',Nota : 100},
    {id: 3, Nombre: 'Larry', Apellido: 'the Bird', Correo: '@twitter', Nota: 80},
  ];

  headElements = ['ID', 'Nombre', 'Apellido', 'Correo', 'Nota'];
  
  constructor( 
    private RestService: RestService
   ) {
      this.RestService.getPeople().subscribe((resp: any)=>
       this.arra= resp
        );
        console.log(this.arra)
    }
  ngOnInit(): void {
    
  }

}
