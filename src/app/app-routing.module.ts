import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcommerseComponent } from './ecommerse/ecommerse.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'ecommerse', component:EcommerseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
