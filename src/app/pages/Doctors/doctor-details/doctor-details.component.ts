import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoctorAboutComponent } from '../doctor-about/doctor-about.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { FormBuilder } from '@angular/forms';
import { SidePanelComponent } from '../side-panel/side-panel.component';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [CommonModule, RouterModule,
    DoctorAboutComponent, FeedbackComponent, SidePanelComponent],
  templateUrl: './doctor-details.component.html'
})
export class DoctorDetailsComponent {

tabForm = this.fb.group({
    tab: ['about']
  });

  constructor(private fb: FormBuilder) {}
}
