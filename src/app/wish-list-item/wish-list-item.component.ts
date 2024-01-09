import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit{
  @Input() wishText! : string;

  @Input() fullfilled! : boolean;

  @Output() fullfilledChange = new EventEmitter<boolean>;

  get cssClass() { // how the get works
    // return this.fullfilled ? ['strickeout', 'text-muted'] : [];
    //
    return { 'strickeout': this.fullfilled }
  }

  constructor() {};

  ngOnInit(): void {}

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled)
  }
}
