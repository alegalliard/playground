import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-slider.component.html',
  styleUrls: ['../slider/dots.scss','./scroll-slider.component.scss']
})
export class ScrollSliderComponent {
  @Input() images:string[] = [];
  @ViewChild('scrollSlider')
  scrollSlider!: ElementRef;
  currentIndex:number = 0;

  imageWidthAndGap:number = 430; //calcula o scroll baseado na soma do tamanho da imagem e o gap no csss

  getCurrentSlider() {
    return `url(${this.images[this.currentIndex]})`
  }

  prev() {
    console.log('scrollSlider', this.scrollSlider)
    const isFirst = this.currentIndex === 0;
    if(!isFirst) {
      this.currentIndex--;
      this.scrollSlider.nativeElement.scrollLeft -= this.imageWidthAndGap;
    }
    
  }
  next() {
    const isLast = this.currentIndex === this.images.length - 1;
    if(!isLast) {
      this.currentIndex++;
      this.scrollSlider.nativeElement.scrollLeft += this.imageWidthAndGap;
    }
  }

  first() {
    this.currentIndex = 0;
    this.scrollSlider.nativeElement.scrollLeft = 0;
  }

  last() {
    this.currentIndex = this.images.length - 1;
    this.scrollSlider.nativeElement.scrollLeft = this.currentIndex * this.imageWidthAndGap;
  }

  goTo(i:number) {
    this.currentIndex = i;
    this.scrollSlider.nativeElement.scrollLeft = this.currentIndex * this.imageWidthAndGap;
  }
}
