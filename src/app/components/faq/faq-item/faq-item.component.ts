import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-item.component.html'
})
export class FaqItemComponent implements OnInit{

  @Input() item: any;
  @Input()
  index!: number;

  isOpen = false;

  constructor() {}

  ngOnInit() {}

   toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
