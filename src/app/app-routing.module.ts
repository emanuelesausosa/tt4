import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tt4Component } from './tt4/tt4.component';

const routes: Routes = [{
  component: Tt4Component,
  path: 'tt4'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
