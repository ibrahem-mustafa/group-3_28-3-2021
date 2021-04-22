import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ACCOUNT} from '../types/account.interface'
import {TRANSACTION} from '../types/transaction.interface'
import {UserService} from './user.service'

@Injectable({
  providedIn: 'root'
})
export class SwiftService {

  constructor(private http: HttpClient, private userService: UserService) { }

  baseRoute = 'http://localhost:3000/swift'
  baseAccountsRoute = `${this.baseRoute}/accounts`
  baseTransactionRoute = `${this.baseRoute}/transactions`
  private _accounts: ACCOUNT[] = []
  private _transactions: TRANSACTION[] = []


  setTransactions(transactions: TRANSACTION[]) {
    this._transactions = transactions
  }

  setAccounts(accounts: ACCOUNT[]) {
    this._accounts = accounts;
  }

  get accounts() {
    return this._accounts.slice()
  }

  get transactions() {
    return this._transactions.slice()
  }

  setHeaders() {
    return {
      headers: {
        authorization: this.userService.getToken()!
      }
    }
  }

  fetchSwift() {
    this.http.get<{
      accounts: ACCOUNT[],
      transactions: TRANSACTION[]
    }>( this.baseRoute , this.setHeaders()).subscribe(
      data => {
        console.log(data)
        this.setAccounts(data.accounts)
        this.setTransactions(data.transactions.reverse())
      },
      err => console.log(err)
    )
  }

  createAccount(name: string, balance: number) {
    this.http.post<{accounts: ACCOUNT[]}>(this.baseAccountsRoute, {name, balance}, this.setHeaders()).subscribe(
      data => this._accounts = data.accounts,
      err => console.log(err)
    )
  }

  createTransaction(data: {
    type: string;
    note: string;
    amount: number;
    fromId: string;
    toId: string;
  }) {
    this.http.post<{transaction: TRANSACTION}>(this.baseTransactionRoute, data, this.setHeaders()).subscribe(
      data => this._transactions.unshift(data.transaction),
      err => console.log(err)
    )
  }

}
