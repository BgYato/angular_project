import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,    
    HomePageComponent, 
    RecoveryPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Esto de alguna forma va ligado con app.component.html */
