import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  
  message = '';

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    const credentials = {
      username: this.loginForm.value.username || '',
      password: this.loginForm.value.password || ''
    };

    const loginSuccessful = this.authService.login(credentials);
    
    if (loginSuccessful) {
      this.router.navigate(['/dashboard']);
    } else {
      this.message = 'Credenciales incorrectas. Usa master@lemoncode.net / 12345678';
    }
  }
}