import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutUsComponent } from './about-us/about-us.component';
import { AdmissionComponent } from './admission/admission.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { TopmenuComponent } from './topmenu/topmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopmenuComponent,
    SliderComponent,
    HomeComponent,
    AboutUsComponent,
    AdmissionComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
