import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DoctorsComponent } from './pages/Doctors/doctors/doctors.component';
import { DoctorDetailsComponent } from './pages/Doctors/doctor-details/doctor-details.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'doctors', component: DoctorsComponent
  },
  {
    path: 'doctors/:id', component: DoctorDetailsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: SignupComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'contact', component: ContactComponent
  },

];
