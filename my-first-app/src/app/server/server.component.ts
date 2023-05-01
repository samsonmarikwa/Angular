import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
  serverId: number = 191;
  serverStatus: string = Math.random() > 0.5 ? 'offline' : 'online';
  errMessage: string = this.serverStatus === 'offline' ? 'Network is down' : 'Network is up';

  getErrorMessage() {
    return this.errMessage;
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
