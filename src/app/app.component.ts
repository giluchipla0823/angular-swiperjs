import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-swiperjs';

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 30
  };
}
