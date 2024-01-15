import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const hosts = ['gmail.com', 'yahoo.com', 'hotmail.com']

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, createInvalidDomainValidator(hosts)]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(2), Validators.minLength(10)])
  });

  submitForm() {

    console.log(this.contactForm.valid);
    if (this.contactForm.dirty) {
      alert('you changed the name field');
    }
  }
}
