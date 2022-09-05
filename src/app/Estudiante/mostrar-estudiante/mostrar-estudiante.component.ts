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
  nombre: string | '';
  email: string|'';
  
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

  async update(key:any){
    Swal.fire({
      
      title: 'Modificar estudiante',
      html:
    '<input id="nombre" class="swal2-input"  placeholder="Nombre de Estudiante">' +
    '<input id="email" class="swal2-input"  placeholder="Email de Estudiante">',

      icon:'info',
      showCancelButton: true,
      confirmButtonText: 'Si, actualizar!',
      cancelButtonText: 'No, actualizar',
      preConfirm: (value) => {
        if ((document.getElementById('nombre') as HTMLInputElement).value == '') {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> Debe completar la información'
          )
        }
        else if((document.getElementById('email') as HTMLInputElement).value ==''){
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> Debe completar la información'
          )
        }
        else{
          
        this.nombre =  (document.getElementById(
          'nombre'
        ) as HTMLInputElement).value;
        this.email = (document.getElementById(
          'email') as HTMLInputElement).value; 
        }
        
       
      }
      
      }).then((result) => {
        
          if (result.value) {
            Swal.fire(
              'Actualizar!!',
              'El registro ha sido actualizado.',
              'success'
            );
          this.RestService.updateStudent(key.EstudianteId,this.nombre, this.email).subscribe();
          setTimeout(() => {window.location.reload()}, 1000);
          }
          else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Cancelado', 'El registro no será actualizado :)', 'error');
          }
        
        
      })
    console.log(`Actualizar datos estudiante${key.EstudianteId} ` )
    
    this.RestService.getPeople().subscribe();
    
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
        setTimeout(() => {window.location.reload()}, 2000);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'El registro no será eliminado :)', 'error');
      }
    });
  }
}

