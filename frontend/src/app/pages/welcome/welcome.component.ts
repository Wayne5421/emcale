  import { Component } from '@angular/core';
import { VariablesService } from '../../services/variables.service';

  @Component({
    selector: 'app-welcome',
    standalone: false,
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.css'
  })
  export class WelcomeComponent {

  constructor(
    public variaveis: VariablesService
  ){}


    tooltipVisible: boolean = false;
  
    toggleTooltip(): void {

      this.tooltipVisible = !this.tooltipVisible;
    }
  
    redirectToWhatsApp() {
      const phoneNumber = this.variaveis.myNumber;

      const message = `Olá! Gostaria de saber mais sobre os seus serviços!`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  }
  