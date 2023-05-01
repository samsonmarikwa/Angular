import { Injectable } from '@angular/core';

export class LoggingServices {
  lastlog: string;

  printlog(message: string) {
    console.log(message);
    console.log(this.lastlog);
    this.lastlog = message;
  }
}
