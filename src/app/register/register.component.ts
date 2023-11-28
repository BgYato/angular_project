import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre:String="";
  apellido:String="";
  tel:Number=0;
  email:String="";
  password:String="";
  resultado:String="";

  ProtoUsuario={
    nombre:"",
    apellido:"",
    tel:0,
    email:"",
    password:""
  }

  constructor(
    public route: Router
  ){}

  showFormLogin(){
    this.route.navigateByUrl('login')
  }

  saveUser(){
      try{
        this.nombre=String(document.getElementById("name")?.textContent);
        console.log(this.nombre);
        this.apellido=String(document.querySelector("#surname")?.textContent);
        this.tel=Number(document.querySelector("#phone")?.textContent);
        this.email=String(document.querySelector("#email")?.textContent);
        this.password=String(document.querySelector("#password")?.textContent);
        // Setting the object typed values by the user
        this.ProtoUsuario.nombre=String(this.nombre);
        this.ProtoUsuario.apellido=String(this.apellido);
        this.ProtoUsuario.tel=Number(this.tel);
        this.ProtoUsuario.email=String(this.email);
        this.ProtoUsuario.password=String(this.password);
        localStorage.setItem('usuario', JSON.stringify(this.ProtoUsuario));
        console.log(localStorage.getItem('usuario'));
        
        // Logica para guardar usuarios 
      }catch(e){
        this.resultado = "Ha ocurrido un error";
      }
  }
}
//   this.saludo='Esto es un sa'; // navegabilidad, reactividad, almacenamiento en local storage 
//   // el login valida si los datos existen o no existen
//   // el register registra los datos en el local storage
  
//   localStorage.setItem('saludo', JSON.stringify( this.saludo )); //<- String converted
// }

// mostrarMensaje(){
//   this.message = String(localStorage.getItem('saludo'));
// }
