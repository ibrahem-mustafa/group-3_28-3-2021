import { Injectable } from '@angular/core';
import { AUTH_RES } from '../types/auth-res.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  setUser(data: AUTH_RES) {
    window.localStorage.setItem('token', `Bearer ${data.token}`);
    window.localStorage.setItem('user', JSON.stringify(data.user));
  }
  getUser() {
    return JSON.parse(window.localStorage.getItem('user')!)
  }
  getToken() {
    return window.localStorage.getItem('token')
  }
  signout() {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
  }

  get userExists() {
    return !!this.getUser()
  }
}
