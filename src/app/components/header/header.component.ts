import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NavbarComponent, LogoComponent, ProfileComponent]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
