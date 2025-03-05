import { Component } from '@angular/core';
import { VariablesService } from '../../services/variables.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    public variaveis: VariablesService
  ){}





}