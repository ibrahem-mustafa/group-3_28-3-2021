import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import {CreateAccountComponent} from '../../modal/create-account/create-account.component'
import {CreateTransactionComponent} from '../../modal/create-transaction/create-transaction.component'
@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {


  constructor(private modalService: NgbModal, ) { }

  open() {
    this.modalService.open(CreateAccountComponent)
  }

  openTransactionModal() {
    this.modalService.open(CreateTransactionComponent)
  }


  ngOnInit(): void {
  }

}
