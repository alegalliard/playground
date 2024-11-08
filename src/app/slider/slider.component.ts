import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss', './dots.scss']
})
export class SliderComponent {

  @Input() images:string[] = [];
  @ViewChild('scrollSlider')
  scrollSlider!: ElementRef;


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

  first() {
    this.currentIndex = 0;
  }

  last() {
    this.currentIndex = this.images.length - 1;
  }

  goTo(i:number) {
    this.currentIndex = i;
  }
}
