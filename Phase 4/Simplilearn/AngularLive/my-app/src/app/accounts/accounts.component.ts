import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
