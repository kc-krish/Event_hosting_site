import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Events', path: '/events' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    // { label: 'Login/Register', path: '/login', isButton: true },
  ];
}
