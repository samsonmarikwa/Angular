import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingServices } from './logging.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private loggingService: LoggingServices
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    this.loggingService.printlog('Hello from AppComponent ngOnInit');
  }
}
