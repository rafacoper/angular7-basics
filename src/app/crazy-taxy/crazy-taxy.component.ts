import { Component, Input } from '@angular/core';

@Component({
  selector: 'crazy-taxy',
  standalone: true,
  imports: [],
  templateUrl: './crazy-taxy.component.html',
  styleUrl: './crazy-taxy.component.css'
})
export class CrazyTaxyComponent {

  @Input()
  message!: string;

  clickedTimes : number = 0;

  getCrazy() {
    this.clickedTimes += 1;
  }
}

