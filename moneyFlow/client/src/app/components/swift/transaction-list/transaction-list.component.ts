import { Component, OnInit } from '@angular/core';
import {SwiftService} from '../../../services/swift.service'

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  constructor(private swiftService: SwiftService) { }

  get transactions() {
    return this.swiftService.transactions
  }

  ngOnInit(): void {
  }


}
