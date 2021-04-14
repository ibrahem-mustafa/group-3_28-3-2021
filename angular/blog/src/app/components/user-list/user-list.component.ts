import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users = [
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
  constructor() {}

  ngOnInit(): void {}
}
