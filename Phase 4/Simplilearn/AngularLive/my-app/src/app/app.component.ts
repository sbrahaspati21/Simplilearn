import { Component } from '@angular/core';
import { AccountService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService],
})
export class AppComponent {
  title = 'my-app';
}
