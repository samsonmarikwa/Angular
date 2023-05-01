import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from "./logging.service";

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor(private log: LoggingService) { }
  accounts = [
    { name: 'Master Account', status: 'active' },
    { name: 'Testaccount', status: 'inactive' },
    { name: 'Hidden Account', status: 'unknown' }
  ];

  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.log.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.log.logStatusChange(status);
  }
}

// define an event
