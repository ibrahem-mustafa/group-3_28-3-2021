import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {


  get users() {
    return this.usersService.users;
  }

  get selectedUserName() {
    return this.usersService.selectedUserName
  }

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}


}
