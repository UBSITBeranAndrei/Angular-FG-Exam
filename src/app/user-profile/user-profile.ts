import { Component } from '@angular/core';

// Custom TypeScript Interface
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  location: string;
  bio: string;
  joinDate: string;
  isActive: boolean;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  // Using the custom interface
  user: User = {
    firstName: 'Andrei Louie',
    lastName: 'Beran',
    email: 'andrei.beran@example.com',
    age: 20,
    location: 'Baguio City, Philippines',
    bio: 'A passionate BSIT student learning Angular and web development. Interested in building modern web applications and exploring new technologies.',
    joinDate: 'January 2024',
    isActive: true
  };

  // Additional property to demonstrate object usage
  profileTitle: string = 'User Profile Information';
}