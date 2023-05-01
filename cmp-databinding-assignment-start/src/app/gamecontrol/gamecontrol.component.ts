import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})

export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  lastNumber: number = 0;
  myInterval;

  startGame() {
    this.myInterval = setInterval(() => {
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.myInterval);
  }
}
