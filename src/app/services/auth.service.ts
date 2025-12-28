import { computed, Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username = signal('');
  isLoggedIn = computed(() => this.username().length > 0);

  setUserName(username: string) {
    this.username.set(username)
  }

  getUsername() {
    return this.username;
  }
}
