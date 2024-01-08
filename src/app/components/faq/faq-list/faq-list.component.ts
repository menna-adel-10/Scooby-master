import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faqs } from '../../../../assets/data/faqs';
import { FaqItemComponent } from '../faq-item/faq-item.component';

@Component({
  selector: 'app-faq-list',
  standalone: true,
  imports: [CommonModule, FaqItemComponent],
  templateUrl: './faq-list.component.html'
})
export class FaqListComponent {

  faqs = faqs;
}
