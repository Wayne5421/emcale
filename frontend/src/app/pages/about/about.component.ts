import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, AfterViewInit {
  count: number = 0;
  finalValue = new Date().getFullYear() - 2012; 
  duration = 2000;
  adress: string[] = [
    "(19) 3873-1857",
    "emcale@emcale.com.br",
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCount();
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 }); 

    const countElement = document.querySelector('.history span');
    if (countElement) {
      observer.observe(countElement);
    }
  }

  animateCount() {
    let start = 0;
    const increment = this.finalValue / (this.duration / 30);

    const interval = setInterval(() => {
      start += increment;
      if (start >= this.finalValue) {
        this.count = this.finalValue;
        clearInterval(interval);
      } else {
        this.count = Math.floor(start);
      }
    }, 30);
  }
}
