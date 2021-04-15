import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-default-bar',
  templateUrl: './default-bar.component.html',
  styleUrls: ['./default-bar.component.css'],
})
export class DefaultBarComponent implements OnInit {
  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {}

  get userExist() {
    return this.userService.userExist;
  }

  signout() {
    this.authService.signout()
  }
}
