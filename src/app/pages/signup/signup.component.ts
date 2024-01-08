import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent {

   signUpForm: FormGroup = new FormGroup({
     name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    photo: new FormControl('selectedFile'),
    gender: new FormControl(''),
    role: new FormControl(''),
  });
}
