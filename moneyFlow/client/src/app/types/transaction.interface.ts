type TRANSACTIONS_TYPE = 'income' | 'expense' | 'transfer'
type TRANSACTION_ACCOUNT = {
  id: string;
  name: string;
}

export interface TRANSACTION {
  _id: string;
  type: TRANSACTIONS_TYPE;
  from: TRANSACTION_ACCOUNT;
  to: TRANSACTION_ACCOUNT;
  amount: number;
  note: string;
  createdAt: string;
}
