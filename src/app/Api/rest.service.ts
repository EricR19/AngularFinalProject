import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
 _url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20'
  constructor(
      private http: HttpClient
  ) {
    
   }

   getPeople(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get(this._url, {headers: header})
   }
}
