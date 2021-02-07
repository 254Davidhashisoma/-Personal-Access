import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../app/profile/profile.component'
import { AboutComponent } from '../app/about/about.component'
import { NotFoundComponent } from '../app/not-found/not-found.component'

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },

  { path: '', redirectTo: "/profile", pathMatch: "full" },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
