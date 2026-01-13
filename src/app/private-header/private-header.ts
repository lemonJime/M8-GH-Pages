import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'private-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatTabsModule, MatButtonModule],
  templateUrl: './private-header.html',
  styleUrl: './private-header.scss',
})
export class PrivateHeaderComponent {
  protected authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}