import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  slides = [];
  slideNavButtons = [];
  currentIndex = 0;
  slideInterval = 3000;
  timer;
  cycling: boolean;
  showButtons = false;
  widthVW = 30;

  ngOnInit() {
    this.fillSlides();
    this.cycleSlides();
    /*setTimeout(() => {
      this.nextSlide();
    }, this.slideInterval);*/
  }

  fillSlides() {
    /*this.addSlide('../assets/images/gss_filters_closed.png');
    this.addSlide('../assets/images/gss_filters_closed_clean.png');
    this.addSlide('../assets/images/gss_filters_open.png');
    this.addSlide('../assets/images/gss_filters_open_clean.png');*/
    this.addSlide('../assets/images/question4.png');
    this.addSlide('../assets/images/siteforecast9.png');
    this.addSlide('../assets/images/siterentals.png');
    this.addSlide('../assets/images/siterentals7.png');
    this.addSlide('../assets/images/sitestays10.png');
    this.addSlide('../assets/images/story2.png');
    this.addSlide('../assets/images/technology2.png');
    this.addSlide('../assets/images/vision2.png');
  }

  addSlide(filePath: string) {
    this.slides.push({
      filePath: filePath
    });
    this.slideNavButtons.push({
      index: this.slides.length - 1
    });
  }

  cycleSlides() {
    if (this.cycling) {
      clearInterval(this.timer);
      this.cycling = false;
    }
    else {
      this.timer = setInterval(() => {
        this.nextSlide();
      }, this.slideInterval);
      this.cycling = true;
    }
  }

  carouselMouseOver() {
    this.showButtons = true;
  }
  carouselMouseLeave() {
    this.showButtons = false;
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1)
      this.currentIndex++;
    else this.currentIndex = 0;
    /*setTimeout(() => {
      this.nextSlide();
    }, this.slideInterval);*/
  }
}
