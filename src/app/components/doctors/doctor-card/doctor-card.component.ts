import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet, CommonModule],
  templateUrl: './doctor-card.component.html'
})
export class DoctorCardComponent {

  @Input() item: any;
  @Input()
  index!: number;
}
