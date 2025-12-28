import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {Router} from '@angular/router';
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
  autService = inject(AuthService);
  message = '';
  private router = inject(Router);


  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  onSubmit() {
    if (this.loginForm.value.username === 'master@lemoncode.net' && this.loginForm.value.password === '12345678') {
      this.autService.setUserName(this.loginForm.value.username);
      this.goToDashboard();
    } else if (this.loginForm.value.username !== 'curso') {
      this.message = 'El nombre del usuario no es correcto'
    } else if (this.loginForm.value.password !== 'angular') {
      this.message = 'La contraseña no es correcta no es correcto'
    }
    else {
      this.message = '';
    }
  }
}

