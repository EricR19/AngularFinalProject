import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private _url: string = 'http://localhost:60326/api/estudiantes'
  
  constructor(private http: HttpClient) {}
   getPeople(){
    return this.http.get(this._url)
   }
   setEstudiante(nombre: string, email: string){
    const body = {
      Nombre: nombre,
      Email: email
    }
    return this.http.post(this._url, body)
   }
   deleteStudent(id:any){
    return this.http.delete(`http://localhost:60326/api/estudiantes/${id}`)
   }
}
