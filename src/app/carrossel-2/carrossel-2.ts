import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrossel-2',
  imports: [CommonModule],
  templateUrl: './carrossel-2.html',
  styleUrl: './carrossel-2.css',
})
export class Carrossel2 {
  currentSlideIndex = 1;
  readonly totalSlides = 6;

  moveSlide(n: number) {
    this.currentSlideIndex += n;
    
    if (this.currentSlideIndex > this.totalSlides) {
      this.currentSlideIndex = 1;
    }
    if (this.currentSlideIndex < 1) {
      this.currentSlideIndex = this.totalSlides;
    }
  }

  currentSlide(n: number) {
    this.currentSlideIndex = n;
  }
}
