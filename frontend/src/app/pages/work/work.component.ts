import { Component } from '@angular/core';
import Aos from 'aos';
import { VariablesService } from '../../services/variables.service';

@Component({
  selector: 'app-work',
  standalone: false,
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {


  constructor(
    public variaveis: VariablesService){}


  services: string[] = [
    "Lançamentos de cabos ópticos",
    "Projeto GPON",
    "Serviços de emenda óptica por fusão",
    "Suportes em backBones",
    "Contratos de manutenção",
    "Construções de redes ópticas"
  ];

  ngAfterViewInit() {
    Aos.init();

    document.documentElement.style.setProperty('--button-text-color', 'red');
  }

  redirectToWhatsApp() {
    const phoneNumber = this.variaveis.myNumber;

    const message = `Olá! Gostaria de saber mais sobre os seus serviços!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}