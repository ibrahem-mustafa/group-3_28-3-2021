import { Component, OnInit } from '@angular/core';
import {SwiftService} from '../../../services/swift.service'

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  constructor(private swiftService: SwiftService) { }

  get accounts() {
    return this.swiftService.accounts
  }

  ngOnInit(): void {
  }

}
