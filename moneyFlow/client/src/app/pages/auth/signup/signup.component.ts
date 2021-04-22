import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string = ''
  email: string = ''
  password: string = ''
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signup() {
    this.authService.signup(this.name, this.email, this.password)
  }

}
