import { Component, Input } from '@angular/core';
import { SliderImages } from './images';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  @Input() images:string[] = [];

  currentIndex:number = 0;

  getCurrentSlider() {
    return `url(${this.images[this.currentIndex]})`
  }

  prev() {
    const isFirst = this.currentIndex === 0;
    if(!isFirst) {
      this.currentIndex--;
    }

  }
  next() {
    const isLast = this.currentIndex === this.images.length - 1;
    if(!isLast) {
      this.currentIndex++;
    }
  }

  goTo(i:number) {
    this.currentIndex = i;
  }
}
