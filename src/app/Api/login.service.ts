import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url: string = 'http://localhost:60326/api/tutores/login'
  constructor(private http: HttpClient) { }



  login(nombre: string, contrasena: string ){
    const body = {
      Nombre: nombre,
      contrasena: contrasena
    }
    return  this.http.post(this._url,body)
  }
}
