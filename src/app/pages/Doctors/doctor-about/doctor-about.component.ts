import { Component } from '@angular/core';
import { FormatDateService } from '../../../utils/format-date.service';

@Component({
  selector: 'app-doctor-about',
  standalone: true,
  imports: [],
  templateUrl: './doctor-about.component.html'
})
export class DoctorAboutComponent {

  constructor(private formatDateService: FormatDateService) {}

  formattedDate(dateString: string): string {
    const date = new Date(dateString);
    return this.formatDateService.formatDate(date);
  }
}
