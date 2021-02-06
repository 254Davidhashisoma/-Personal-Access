import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../app/about/about.component'
import { AboutComponent } from '../app/AboutComponent.Component'
import { NotFoundComponent } from '..app/not-found/not-not-found.Component'
import { from } from 'rxjs';

const routes: Routes = [
   { path: 'profile', Component: ProfileComponent },
   { path: 'about', Component: AboutComponent },
   { path  '', redirectTo: "/profile", pathmatch: "full"} 
   { path : '**' Component: NotFoundComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
