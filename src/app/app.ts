import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHeaderComponent } from './public-header/public-header';
import { PrivateHeaderComponent } from './private-header/private-header';
import { AuthService } from './services/auth.service';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PublicHeaderComponent, PrivateHeaderComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lab_angular');
  protected authService = inject(AuthService);

  isLoggedIn = this.authService.isLoggedIn;
}
