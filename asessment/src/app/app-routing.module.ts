import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NavlogComponent } from './navlog/navlog.component';

const routes: Routes = [
  {
    path : '' ,
    component : NavbarComponent
    ,
    children : [
      {
        path :'Home',
        component : HomeComponent
      },
  
      {
        path :'contact',
        component : ContactComponent
      },
      {
        path :'About',
        component : AboutComponent
      },
      {
        path :'Navlog',
        component : NavlogComponent
      }

     
     
    ]
   
  }
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
