import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const savedUserStr = localStorage.getItem('authUser');
    if (savedUserStr) {
      this.user = JSON.parse(savedUserStr);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
