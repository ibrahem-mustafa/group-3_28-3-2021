import { Component, OnInit } from '@angular/core';
import {SwiftService} from '../../services/swift.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = 'Hello World'

  constructor(private swiftService: SwiftService) { }

  get accounts() {
    return this.swiftService.accounts
  }

  get transactions() {
    return this.swiftService.transactions
  }

  ngOnInit(): void {
    this.swiftService.fetchSwift()
  }

}
