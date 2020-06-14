import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component'
import { MenuComponent} from 'src/app/menu/menu.component'
const routes: Routes = [

  {path : '' , component:MenuComponent ,
  children: [
    { path : 'home' , component : HomeComponent}  
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
