import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  count: Signal<number>;
  private countValue = signal(0);
  finalValue = new Date().getFullYear() - 2012; 
  duration = 2000; 

  adress: string[] = [
    "emcale@emcale.com.br",
    "(19) 3873-1857",

  ];

  constructor() {
    this.count = computed(() => this.countValue());
  }

  ngOnInit() {
    this.animateCount();
  }

  animateCount() {
    let start = 0;
    const increment = this.finalValue / (this.duration / 30);

    const interval = setInterval(() => {
      start += increment;
      if (start >= this.finalValue) {
        this.countValue.set(this.finalValue);
        clearInterval(interval);
      } else {
        this.countValue.set(Math.floor(start));
      }
    }, 30);
  }
}
