import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css'],
})
export class UserListItemComponent implements OnInit {
  @Input() user: any = {};

  @Output() selectUserEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectUser() {
    this.selectUserEvent.emit(this.user.name)
  }
}
