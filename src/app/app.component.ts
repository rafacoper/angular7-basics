import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {}

  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    WishModule,
    ContactModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  
  constructor() {}

  goToContact() {
    this.router.navigate(['contact']);
  }
}
