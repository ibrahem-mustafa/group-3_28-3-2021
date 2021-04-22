import { Component, OnInit, Input } from '@angular/core';
import {TRANSACTION} from '../../../types/transaction.interface'

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.css']
})
export class TransactionListItemComponent implements OnInit {
  @Input() transaction?: TRANSACTION
  constructor() { }

  ngOnInit(): void {
  }

  newDate() {
    return new Date()
  }

}
