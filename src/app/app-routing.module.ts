import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ModperComponent } from './components/modper/modper.component'

const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "modper", component: ModperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
