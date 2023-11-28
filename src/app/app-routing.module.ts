import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';

const routes: Routes = [
 { path:'', component : LoginComponent },
 { path:'login', component : LoginComponent },
 { path:'register', component : RegisterComponent},
 { path:"home", component:HomePageComponent},
 { path:"recovery", component:RecoveryPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
