import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/services/accounts.service';
import { LoggingService } from 'src/app/services/logging.service';
import { AccountsComponent } from '../accounts.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  @Input()
  account: {
    name: string;
    status: string;
  } = { name: '', status: '' };

  @Input() id: number = 0;

  constructor(
    private LoggingService: LoggingService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.LoggingService.logStatusChange(status);
  }
}
