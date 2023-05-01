import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  collapsed: boolean = true;
  @Output() selectedFeature = new EventEmitter<string>();

  selectFeature(feature: string) {
    this.selectedFeature.emit(feature);
  }
}
