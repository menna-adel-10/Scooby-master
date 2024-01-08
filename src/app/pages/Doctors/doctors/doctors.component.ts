import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { doctors } from '../../../../assets/data/doctors';
import { DoctorCardComponent } from '../../../components/doctors/doctor-card/doctor-card.component';
import { TestimonialComponent } from '../../../components/testimonial/testimonial.component';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, DoctorCardComponent, TestimonialComponent],
  templateUrl: './doctors.component.html'
})
export class DoctorsComponent {

   doctors = doctors;
}
