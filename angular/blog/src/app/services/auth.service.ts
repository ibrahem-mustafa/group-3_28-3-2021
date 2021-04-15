import { LOGINRES_INTERFACE } from './../types/login-res.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:3000/auth';
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  login(email: string, password: string) {
    this.http
      .post<LOGINRES_INTERFACE>(`${this.baseUrl}/signin`, {
        email,
        password,
      })
      .subscribe(
        (data) => {
          this.userService.setUser(data);
          // this.router.navigate(['home', 'home', 'todos'])
          this.router.navigateByUrl('/');
        },
        (err) => console.log(err)
      );
  }

  signup(email: string, password: string, name: string) {
    this.http
      .post(`${this.baseUrl}/signup`, {
        email,
        password,
        name,
      })
      .subscribe(
        (data) => {
          this.router.navigateByUrl('/login');
        },
        (err) => console.log(err)
      );
  }

  signout() {
    this.userService.clear()
    this.router.navigateByUrl('/login')
  }
}
