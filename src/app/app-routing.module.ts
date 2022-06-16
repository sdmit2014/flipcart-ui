import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ParentComponent } from './parent/parent.component';
import { RegisterComponent } from './register/register.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {path:'',component:NgforComponent},
  {path:'rxjs',component:RxjsComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'register', component:RegisterComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
