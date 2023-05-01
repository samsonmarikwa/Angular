import { Component } from "@angular/core";

@Component({
  selector: 'servers-display-details',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})

export class DisplayDetails {
  toggleDisplay: boolean = false;
  buttonClicks = [];
  count: number = 0;

  toggleDisplayAndLog() {
    this.toggleDisplay = !this.toggleDisplay;
    this.buttonClicks.push(new Date());
    ++this.count;
  }
}
