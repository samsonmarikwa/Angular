import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  buttonCaption: string = 'Only show odd numbers';
  value = 25;

  toggleOdd() {
    this.onlyOdd = !this.onlyOdd;
    this.buttonCaption = this.onlyOdd ? 'Only show even numbers' : 'Only show odd numbers';
  }
}
