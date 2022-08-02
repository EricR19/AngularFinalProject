import { RestService } from './../../Api/rest.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
  async deleteStudent(key:any){
    Swal.fire({
      title: 'Estás seguro que deseas eliminarlo?',
      text: 'No vas a ser capaz de recuperarlo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo!',
      cancelButtonText: 'No, mantenerlo',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!!',
          'El Estudiante ha sido eliminado.',
          'success'
        );
        this.RestService.deleteStudent(key.EstudianteId).subscribe(data => console.log(data));
         setTimeout(() => {window.location.reload()}, 2000);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'El registro no será eliminado :)', 'error');
      }
    });
  }
  confirmBox() {
    Swal.fire({
      title: 'Estás seguro que deseas eliminarlo?',
      text: 'No vas a ser capaz de recuperarlo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo!',
      cancelButtonText: 'No, mantenerlo',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!!',
          'El Estudiante ha sido eliminado.',
          'success'
        );
        console.log(result.value);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'El registro no será eliminado :)', 'error');
      }
    });
  }
}
