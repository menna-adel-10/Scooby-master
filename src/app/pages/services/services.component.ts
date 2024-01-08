import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../components/services/service-card/service-card.component';
import { services } from '../../components/services/services';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  services = services;
}
