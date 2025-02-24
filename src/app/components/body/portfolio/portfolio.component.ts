import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faGooglePlus, } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faImage,faLaptop, faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [
    FontAwesomeModule
  ],
})
export class PortfolioComponent implements OnInit {

  faImage = faImage;
  faLaptop=faLaptop;
  faCamera=faCamera;
  constructor() { }

  ngOnInit() {
  }

}
