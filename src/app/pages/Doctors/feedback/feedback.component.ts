import { Component, Input } from '@angular/core';
import { FormatDateService } from '../../../utils/format-date.service';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FeedbackFormComponent],
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent {

 stars = Array(5).fill(0);
@Input() color: string = '#0067FF';
  showFeedbackForm = false;

   constructor(private formatDateService: FormatDateService) {}

  formattedDate(dateString: string): string {
    const date = new Date(dateString);
    return this.formatDateService.formatDate(date);
  }

  showForm(): void {
     console.log('Feedback Form Showed');
    this.showFeedbackForm = !this.showFeedbackForm;
  }
}
