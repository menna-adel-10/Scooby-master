import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { DoctorListComponent } from '../../components/doctors/doctor-list/doctor-list.component';
import { FaqListComponent } from '../../components/faq/faq-list/faq-list.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule,
    AboutComponent, ServicesComponent, DoctorListComponent,
  FaqListComponent, TestimonialComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
