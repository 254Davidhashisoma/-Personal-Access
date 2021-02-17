// import { Repositories } from './searchClasses/repositories';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DateDirective } from './date.directive';
import { OnHoverDirective } from './on-hover.directive';
// import { Repositories } from './searchClasses/repositories'
// import { OnHoverDirective } from './on-hover.directive';
// import { DateDirective } from './date.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FormComponent,
    AboutComponent,
    NavComponent,
    NotFoundComponent,
    DateDirective,
    OnHoverDirective,
    // Repositories
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Repositories,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
