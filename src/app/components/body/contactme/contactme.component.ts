import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css'],
  imports: [ReactiveFormsModule]
})
export class ContactmeComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  submitform(event: Event) {
    event.preventDefault();
    const tempData = this.contactForm.value;
    if (tempData.name === '' || tempData.subject === '' || tempData.email === '' || tempData.message === '') {  
      alert('Please fill all the fields');
      return;
    }
    
    alert('Form Data: ' + JSON.stringify(this.contactForm.value));
    this.contactForm.reset();
  }
}
