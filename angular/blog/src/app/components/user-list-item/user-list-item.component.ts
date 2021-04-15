import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
})
export class UserListItemComponent implements OnInit {


  @Input() user: any

  constructor(private usersService: UsersService) {}

  ngOnInit(): void { }



  selectUser() {
    this.usersService.updateSelectedUser(this.user.name)
  }
}
