import {
  Component, EventEmitter, Output, ViewChild,
  ViewEncapsulation, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output('onSvrCreated') onServerCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('onBPCreated') onBlueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
  onAddServer(srvNameInp: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.onServerCreated.emit({
      serverName: srvNameInp.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(srvNameInp: HTMLInputElement) {
    this.onBlueprintCreated.emit({
      serverName: srvNameInp.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
