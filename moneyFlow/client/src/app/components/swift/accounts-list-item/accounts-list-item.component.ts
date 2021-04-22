import { Component, OnInit, Input } from '@angular/core';
import {ACCOUNT} from '../../../types/account.interface'

@Component({
  selector: 'app-accounts-list-item',
  templateUrl: './accounts-list-item.component.html',
  styleUrls: ['./accounts-list-item.component.css']
})
export class AccountsListItemComponent implements OnInit {
  @Input() account?: ACCOUNT
  constructor() { }

  ngOnInit(): void {
  }

}
