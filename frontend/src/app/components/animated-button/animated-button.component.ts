import { Component } from '@angular/core';
import { VariablesService } from '../../services/variables.service';

@Component({
  selector: 'app-animated-button',
  standalone: false,
  templateUrl: './animated-button.component.html',
  styleUrl: './animated-button.component.css'
})
export class AnimatedButtonComponent {

  constructor(public variaveis : VariablesService){}

  redirectToWhatsApp() {
    const phoneNumber = this.variaveis.myNumber;

    const message = `Olá! Gostaria de saber mais sobre os seus serviços!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
