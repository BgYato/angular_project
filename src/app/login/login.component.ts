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

  usuario = this.recoveryStorageFromJson("usuario");

  resultado:String="";
  correo : String = "";
  contrasena : String = "";

  constructor(
    public route: Router
  ){}

  showFormRegister(){
    this.route.navigateByUrl('register')
  }
  showFormPassword(){
    this.route.navigateByUrl('recovery')
  }
  saludar(){
    this.saludo=('Esto es un saludo para '+this.usuario.nombre);
    
    localStorage.setItem('saludo', JSON.stringify( this.saludo )); //<- String converted
  }
  mostrarMensaje(){
    this.message = String(localStorage.getItem('saludo'));
  }

  login(){
    const correo = document.getElementById("correoUsuario") as HTMLInputElement;
    const contrasena = document.getElementById("passwordUsuario") as HTMLInputElement;

    if (this.usuario.email === correo.value && this.usuario.password === contrasena.value) {
      this.showLoginSuccess()
    } else {
      this.resultado = "Datos incorrectos";
      return;
    }
  }
  showLoginSuccess(){
    this.route.navigateByUrl('home')
  }
  recoveryStorageFromJson(nameData:String){
    if (nameData) {
      return JSON.parse(localStorage.getItem(nameData.toString()) || '{}');
    }
  }
}
