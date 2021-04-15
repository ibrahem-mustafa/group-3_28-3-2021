import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = ''
  name = ''
  password = ''
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signup() {
    this.authService.signup(this.email, this.password, this.name)
  }

}
