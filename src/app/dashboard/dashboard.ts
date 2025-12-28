import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected  authService = inject(AuthService);
}
