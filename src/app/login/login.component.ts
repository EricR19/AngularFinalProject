import { style } from '@angular/animations';
import { Component, Directive, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import {  Router } from '@angular/router';
import { elementAt, empty } from 'rxjs';
import { LoginService } from '../Api//login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  alerta: string = "";
  show: boolean = false;
  nombre = '';
  contrasena = '';
  mapping = new Map<string, string>();
  obj:any;
  constructor(private router:Router, private LoginService: LoginService 
  ) { 
    
  }

  ngOnInit(): void {
    
   

 
  }
    logearse(){
     (this.LoginService.login(this.nombre, this.contrasena)).subscribe((data:any) => {
      this.obj = data
      console.log(data)
      if(data.length > 0){
        this.router.navigate(['/index'])
      }
      else{
        this.alerta = "Contraseña o Usuario incorrecto"
        this.show = true;
      }
      
    }
     )

      
    }
  }
 
