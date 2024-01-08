import { Component } from '@angular/core';
import { socialLinks, quickLinks01, quickLinks03, quickLinks02 } from '../../../assets/data/links';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './footer.component.html',

})
export class FooterComponent {
  social = socialLinks;
  quick01 = quickLinks01;
  quick02 = quickLinks02;
  quick03 = quickLinks03;

  year = new Date().getFullYear();
}
