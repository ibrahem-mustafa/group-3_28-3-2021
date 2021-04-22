import { Component, OnInit } from '@angular/core';
import {SwiftService} from '../../../services/swift.service'

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  amount: number = 10
  type: string = 'expense'
  note: string = ''
  fromId: string = ''
  toId: string = ''
  constructor(private swiftService: SwiftService) { }

  get accounts() {
    return this.swiftService.accounts
  }

  get toAccounts() {
    return this.swiftService.accounts.filter(acc => acc._id != this.fromId)
  }

  ngOnInit(): void {
  }

  create() {
    this.swiftService.createTransaction({
      type: this.type,
      amount: this.amount,
      note: this.note,
      fromId: this.fromId,
      toId: this.type != 'transfer' ? this.fromId : this.toId
    })
  }
}
