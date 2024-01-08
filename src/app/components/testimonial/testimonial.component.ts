import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './testimonial.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialComponent {

 swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
});



}
