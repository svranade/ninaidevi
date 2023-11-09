import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent},
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'about', pathMatch: 'full', component: AboutUsComponent},
  { path: 'admission', pathMatch: 'full', component: AdmissionComponent},
  { path: 'contact-us', pathMatch: 'full', component: ContactUsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
