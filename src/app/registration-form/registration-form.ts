import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.css'
})
export class RegistrationForm {
  // Form model
  formData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: null,
    dateOfBirth: '',
    country: '',
    gender: '',
    accountType: 'personal',
    agreeToTerms: false
  };

  // Dropdown options
  countries: string[] = [
    'Philippines',
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Japan',
    'South Korea',
    'Singapore'
  ];

  // Form submission handler
  onSubmit() {
    if (this.formData.agreeToTerms) {
      console.log('Form Submitted:', this.formData);
      alert('Registration Successful!\n\nForm data logged to console.');
    } else {
      alert('Please agree to the terms and conditions.');
    }
  }

  // Reset form
  onReset() {
    this.formData = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: null,
      dateOfBirth: '',
      country: '',
      gender: '',
      accountType: 'personal',
      agreeToTerms: false
    };
  }
}