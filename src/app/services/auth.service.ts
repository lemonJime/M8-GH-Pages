import { computed, Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private localStorageService: LocalStorageService) {
    const savedLocalStorage = localStorageService.getItem(this.STORAGE_KEY);

    if (savedLocalStorage) {
      this.username.set(savedLocalStorage);
    }
  };

  username = signal('');
  isLoggedIn = computed(() => this.username().length > 0);
  private readonly STORAGE_KEY = 'auth_user';

  login(credentials: { username: string; password: string }): boolean {
    if (credentials.username === 'master@lemoncode.net' && credentials.password === '12345678') {
      this.username.set(credentials.username);
      this.localStorageService.setItem(this.STORAGE_KEY, this.username());
      return true;
    }
    return false;
  }

  logout(): void {
    this.username.set('');
    this.localStorageService.removeItem(this.STORAGE_KEY);
  }

  isLogged(): boolean {
    return this.isLoggedIn();
  }

  getUsername(): string {
    return this.username();
  }
}