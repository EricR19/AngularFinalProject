
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
    {
    path:'',
    component: LoginComponent
    },
    {
      path:'',
      loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule)
    },
    {
    path:'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
    },
    {
      path:'index-estudiante',
      loadChildren: () => import('./Estudiante/index-estudiante/index-estudiante.module').then(m => m.IndexEstudianteModule)
    },
    {
      path:'index-profesor',
      loadChildren: () => import('./Profesor/index-profesor/index-profesor.module').then(m => m.IndexProfesorModule)
    },
    {
      path:'mostrar-estudiante',
      loadChildren: () => import('./Estudiante/mostrar-estudiante/mostrar-estudiante.module').then(m => m.MostrarEstudianteModule)
    },
    {
      path:'insertar-estudiante',
      loadChildren: () => import('./Estudiante/insertar-estudiante/insertar-estudiante.module').then(m => m.InsertarEstudianteModule)
    },
    {
      path:'eliminar-estudiante',
      loadChildren: () => import('./Estudiante/eliminar-estudiante/eliminar-estudiante.module').then(m => m.EliminarEstudianteModule)
    },
    {
      path:'agregar-profesor',
      loadChildren: () => import('./Profesor/agregar-profesor/agregar-profesor.module').then(m => m.AgregarProfesorModule)
    },
    {
      path:'eliminar-profesor',
      loadChildren: () => import('./Profesor/eliminar-profesor/eliminar-profesor.module').then(m => m.EliminarProfesorModule)
    },
    {
      path:'mostrar-profesor',
      loadChildren: () => import('./Profesor/mostrar-profesor/mostrar-profesor.module').then(m => m.MostrarProfesorModule)
    }
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
