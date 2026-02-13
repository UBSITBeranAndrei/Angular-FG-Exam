import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserProfile } from './user-profile/user-profile';
import { RegistrationForm } from './registration-form/registration-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'profile', component: UserProfile },
  { path: 'register', component: RegistrationForm },
  { path: '**', redirectTo: '' }
];