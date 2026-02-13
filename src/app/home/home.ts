import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // TypeScript Primitive Variables with explicit type annotations
  appTitle: string = 'Welcome to My Angular Application';
  appDescription: string = 'This is a Single Page Application demonstrating Angular fundamentals including routing, components, and TypeScript type declarations.';
  currentYear: number = 2026;
  studentName: string = 'Andrei Louie D. Beran';
  course: string = 'BSIT - 2nd Year';
  isProjectComplete: boolean = false;
  visitCount: number = 1;
  
  // Welcome message
  welcomeMessage: string = 'Thank you for visiting my Angular project!';
}