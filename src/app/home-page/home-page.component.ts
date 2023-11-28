import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  usuario = this.recoveryStorageFromJson("usuario");

  constructor(
    public route: Router
  ){}

  recoveryStorageFromJson(nameData:String){
    if (nameData) {
      return JSON.parse(localStorage.getItem(nameData.toString()) || '{}');
    }
  }

  showFormLogin(){
    this.route.navigateByUrl('login')
  }
}
