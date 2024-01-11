import { Component } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
  providers: [EventService]
})
export class WishComponent {
  items: WishItem[] = [];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish) => {
      console.log(wish);

      let index = this.items.indexOf(wish)
      this.items.splice(index, 1)
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data
    }, (error: any) => {
      alert(error.message)
    })
  }

  filter : any;

}
