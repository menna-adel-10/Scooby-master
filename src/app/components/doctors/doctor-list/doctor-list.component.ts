import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';
import { doctors }  from '../../../../assets/data/doctors.js';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [CommonModule, DoctorCardComponent,],
  templateUrl: './doctor-list.component.html'
})
export class DoctorListComponent {

  doctors = doctors;


}
