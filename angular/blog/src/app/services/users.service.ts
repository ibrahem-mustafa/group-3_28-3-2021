import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  selectedUserName = 'No User Selected';

  private _users = [
    {
      name: 'Ahmed',
      age: 18,
    },
    {
      name: 'Mohammed',
      age: 29,
    },
    {
      name: 'ali',
      age: 49,
    },
    {
      name: 'ibrahem',
      age: 27,
    },
  ];

  get users() {
    return this._users.slice();
  }

  updateSelectedUser(username: string) {
    if (username === this.selectedUserName) {
      this.selectedUserName = 'No User Selected';
      return;
    }
    this.selectedUserName = username;
  }
}
