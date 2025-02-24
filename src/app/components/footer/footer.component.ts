import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faGooglePlus, } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [
    FontAwesomeModule
  ],
  
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGooglePlus = faGooglePlus;
  constructor() { }

  ngOnInit() {
  }

}
