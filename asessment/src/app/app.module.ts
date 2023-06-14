import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MytableComponent } from './mytable/mytable.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FormsModule } from '@angular/forms';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { ViewHotelComponent } from './view-hotel/view-hotel.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import {HttpClientModule} from '@angular/common/http';
import { HotelsService } from './Services/hotels.service';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';
import { AboutComponent } from './about/about.component';
import { NavlogComponent } from './navlog/navlog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    MytableComponent,
    NewsletterComponent,
    AddHotelComponent,
    ViewHotelComponent,
    UpdateHotelComponent,DeleteHotelComponent, AboutComponent, NavlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
