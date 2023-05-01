import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() ninja: { name: string, belt: string };
  @Output() onYell = new EventEmitter();

  fireYellEvent(e) {
    this.onYell.emit(e);
  }
}
