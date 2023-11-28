import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  saludo : String ='';
  message : String = '';

  constructor(
    public route: Router
  ){}

  showFormRegister(){
    this.route.navigateByUrl('register')
  }
  showFormPassword(){
    this.route.navigateByUrl('recover-password')
  }
  saludar(){
    this.saludo='Esto es un saludo para Andres'; // navegabilidad, reactividad, almacenamiento en local storage 
    // el login valida si los datos existen o no existen
    // el register registra los datos en el local storage
    
    localStorage.setItem('saludo', JSON.stringify( this.saludo )); //<- String converted
  }
  mostrarMensaje(){
    this.message = String(localStorage.getItem('saludo'));
  }
}
