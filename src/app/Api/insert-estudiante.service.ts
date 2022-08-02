import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertEstudianteService {
  private _url: string = 'http://localhost:60326/api/estudiantes'
  constructor() { }
}
