import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import events from '../../shared/services/EventService';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit{
  @Input() wish! : WishItem;

  get cssClass() {
    // return this.fullfilled ? ['strickeout', 'text-muted'] : [];
    //
    return { 'strickeout': this.wish.isComplete }
  }

  constructor() {};

  ngOnInit(): void {}

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
  }
}
