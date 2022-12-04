import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Navbar2Component } from './navbar2/navbar2.component';
const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"admin",
    component:AdminLoginComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"about",
    component:AboutUsComponent
  },
  {
    path:"gal",
    component:GalleryComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    GalleryComponent,
    Navbar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
