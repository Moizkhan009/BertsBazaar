import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FlashsaleComponent } from '../flashsale/flashsale.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent,FlashsaleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
