import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent {
  usuario = this.recoveryStorageFromJson("usuario");

  resultado:String="";
  correo : String = "";
  contrasena : String = "";
  contrasenaNueva : String = "";

  constructor(
    public route: Router
  ){}

  recovery(){
    const correo = document.getElementById("correoUsuario") as HTMLInputElement;
    const contrasena = document.getElementById("passwordUsuario") as HTMLInputElement;
    const contrasenaNueva = document.getElementById("passwordUsuarioNueva") as HTMLInputElement;

    if (this.usuario.email === correo.value && this.usuario.password === contrasena.value && this.usuario.password != contrasenaNueva.value) {
      this.resultado = "Se ha cambiado correctamente la contraseña."
      this.usuario.password = contrasenaNueva.value;
      this.saveStorage("usuario", this.usuario);
    } else {
      this.resultado = "Datos incorrectos";
      return;
    }
  }

  showFormLogin(){
    this.route.navigateByUrl('login')
  }

  saveStorage(nameData:String, data:Object) {
    if (data && nameData) {
      localStorage.setItem(nameData.toString(), JSON.stringify(data));   
    }
  }


  recoveryStorageFromJson(nameData:String){
    if (nameData) {
      return JSON.parse(localStorage.getItem(nameData.toString()) || '{}');
    }
  }
}
