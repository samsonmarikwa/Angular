import { outputAst } from '@angular/compiler';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  @Input() number: number;
}
