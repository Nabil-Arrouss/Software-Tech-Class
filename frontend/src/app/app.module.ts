import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MuseumComponent } from './components/museum/museum.component';
import { ImageFormComponent } from './components/image-form/image-form.component';
import { ImageComponent } from './components/image/image.component';
import { ImageInfoComponent } from './components/image-info/image-info.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MuseumComponent,
    ImageFormComponent,
    ImageComponent,
    ImageInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
