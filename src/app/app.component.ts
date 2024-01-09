import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { CrazyTaxyComponent } from './crazy-taxy/crazy-taxy.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import events from '../shared/services/EventService'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    WishListComponent,
    CrazyTaxyComponent,
    AddWishFormComponent,
    WishFilterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Listen Gramatik', true),
  ];

  constructor() {
    events.listen('removeWish', (wish) => {
      console.log(wish);

      let index = this.items.indexOf(wish)
      this.items.splice(index, 1)
    })
  }

  filter : any;
}
