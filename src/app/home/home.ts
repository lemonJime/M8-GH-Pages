import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  titulo : string = 'Laboratorio Módulo 4.2'
  texto : string= 'Angular Framework'
}
