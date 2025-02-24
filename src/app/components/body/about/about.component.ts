import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [
    FontAwesomeModule
  ],
})
export class AboutComponent implements OnInit {

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGooglePlus = faGooglePlus;
  constructor() { }

  ngOnInit() {
  }

}
