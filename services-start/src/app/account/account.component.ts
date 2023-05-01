import { Component, Input } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  onSetTo(status: string) {
    this.accountservice.updateStatus(this.id, status);
    this.accountservice.statusUpdated.emit(status);
  }

  constructor(private accountservice: AccountService) { }
}

// emit the event defined in the accountService
