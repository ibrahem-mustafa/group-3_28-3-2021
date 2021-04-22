import { Component, OnInit } from '@angular/core';
import {SwiftService} from '../../../services/swift.service'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  name: string = ''
  balance: number = 10

  constructor(private swiftService: SwiftService) { }

  ngOnInit(): void {
  }

  create() {
    this.swiftService.createAccount(this.name, this.balance)
  }

}
