import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = { email: '', password: '' };
  errorMsg = '';

  constructor(private router: Router) {}

  onLogin() {
    const savedUserStr = localStorage.getItem('authUser');
    if (savedUserStr) {
      const savedUser = JSON.parse(savedUserStr);
      if (savedUser.email === this.user.email && savedUser.password === this.user.password) {
        this.errorMsg = '';
        this.router.navigate(['/profile']);
      } else {
        this.errorMsg = 'Invalid email or password';
      }
    } else {
      this.errorMsg = 'No user registered yet.';
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
