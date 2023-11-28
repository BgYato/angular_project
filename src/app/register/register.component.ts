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
  address:String="";
  tel:String="";
  email:String="";
  password:String="";
  resultado:String="";

  ProtoUsuario={
    nombre:"",
    apellido:"",
    address:"",
    tel:"",
    email:  "",
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
      const nombre = document.getElementById("name") as HTMLInputElement;
      const apellido = document.getElementById("lastname") as HTMLInputElement;
      const direccion = document.getElementById("address") as HTMLInputElement;
      const telefono = document.getElementById("phone") as HTMLInputElement;
      const correo = document.getElementById("email") as HTMLInputElement;
      const contrasena = document.getElementById("password") as HTMLInputElement;

      if (
        nombre.value == "" || apellido.value == "" || direccion.value == "" || telefono.value == "" || correo.value == "" || contrasena.value == ""
      ) {
        this.resultado = "No puedes dejar espacios en blancos";
        return;
      }

      this.nombre=String(nombre.value); 
      this.apellido=String(apellido.value);
      this.address=String(direccion.value);
      this.tel=String(telefono.value);
      this.email=String(correo.value);
      this.password=String(contrasena.value);

      // Setting the object typed values by the user
      this.ProtoUsuario.nombre=String(this.nombre);
      this.ProtoUsuario.apellido=String(this.apellido);
      this.ProtoUsuario.address=String(this.address);
      this.ProtoUsuario.tel=String(this.tel);
      this.ProtoUsuario.email=String(this.email);
      this.ProtoUsuario.password=String(this.password);
      
      //save the data
      this.saveStorage("usuario", this.ProtoUsuario);

      this.showFormLogin()
    }catch(e){
      this.resultado = "Ha ocurrido un error";
    }
  }

  saveStorage(nameData:String, data:Object) {
    if (data && nameData) {
      localStorage.setItem(nameData.toString(), JSON.stringify(data));   
    }
  }

  recoveryStorageFromJson(nameData:String){
    if (nameData) {
      /* localStorage.getItem(nameData.toString()) */
      return JSON.parse(localStorage.getItem(nameData.toString()) || '{}');
    }
  }
}
