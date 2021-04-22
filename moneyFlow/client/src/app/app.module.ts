import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultBarComponent } from './components/bars/default-bar/default-bar.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountsListComponent } from './components/swift/accounts-list/accounts-list.component';
import { AccountsListItemComponent } from './components/swift/accounts-list-item/accounts-list-item.component';
import { TransactionListComponent } from './components/swift/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './components/swift/transaction-list-item/transaction-list-item.component';
import { ActionBarComponent } from './components/bars/action-bar/action-bar.component';
import { CreateAccountComponent } from './components/modal/create-account/create-account.component';
import { CreateTransactionComponent } from './components/modal/create-transaction/create-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultBarComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AccountsListComponent,
    AccountsListItemComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    ActionBarComponent,
    CreateAccountComponent,
    CreateTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
