import { Injectable } from '@angular/core';
import { LOGINRES_INTERFACE } from '../types/login-res.interface';
import { USER_INTERFACE } from '../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  setUser(data: LOGINRES_INTERFACE) {
    window.localStorage.setItem('token', `Bearer ${data.token}`)
    window.localStorage.setItem('user', JSON.stringify(data.user))
  }

  getUser(): USER_INTERFACE {
    return JSON.parse(window.localStorage.getItem('user')!);
  }

  getToken(): string {
    return window.localStorage.getItem('token')!
  }

  get userExist(): boolean {
    return !!this.getUser()
  }

  clear(): void {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
  }
}
