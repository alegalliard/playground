import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { SliderImages } from './slider/images';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'playground';

  images:string[] = SliderImages;
}
