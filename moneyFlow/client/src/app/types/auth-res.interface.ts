import { USER } from "./user.interface";
import {ACCOUNT} from './account.interface'
import {TRANSACTION} from './transaction.interface'

export interface AUTH_RES {
  token: string;
  user: USER;
  accounts: ACCOUNT[];
  transactions: TRANSACTION[]
}
