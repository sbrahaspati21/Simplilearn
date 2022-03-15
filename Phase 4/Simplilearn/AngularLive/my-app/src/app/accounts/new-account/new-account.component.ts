import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/services/accounts.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  @Output()
  accountAdded = new EventEmitter<{ name: string; status: string }>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.AccountService.addAccount(accountName, accountStatus);
    this.LoggingService.logStatusChange(accountStatus);
  }

  constructor(
    private LoggingService: LoggingService,
    private AccountService: AccountService
  ) {}

  ngOnInit(): void {}
}
