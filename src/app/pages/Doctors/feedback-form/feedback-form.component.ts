import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-form.component.html'
})
export class FeedbackFormComponent {
  stars = Array(5).fill(0);
   currentRating = 0;
  hover: number = 0;
  reviewText: string = '';

  rate(rating: number): void {
    this.currentRating = rating;
  }

  setHover(value: number): void {
    this.hover = value;
  }

  resetRating(): void {
    this.setHover(0);
    this.rate(0);
  }

 handleSubmitReview(event: Event): void {
    event.preventDefault();
    
  }
}
