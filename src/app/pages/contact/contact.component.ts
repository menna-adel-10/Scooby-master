import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

   contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
     this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      });
  }

   submitForm() {
    if (this.contactForm.valid) {
    console.log('Form submitted successfully!', this.contactForm.value);
    } else {
       console.log('Form has validation errors. Please check the fields.');
    }
  }
}
