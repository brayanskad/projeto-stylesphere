import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrossel',
  imports: [CommonModule],
  templateUrl: './carrossel.html',
  styleUrl: './carrossel.css',
})
export class Carrossel {
  currentSlideIndex = 1;
  readonly totalSlides = 3;

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