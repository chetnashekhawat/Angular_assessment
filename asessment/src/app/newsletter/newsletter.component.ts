import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  email: string | undefined;
 
  termsAccepted: boolean = false;


  loginUser(formData: NgForm) {
    if (formData.valid && this.termsAccepted) {
      console.log('Successfully subscribed with email: ' + this.email);
    }
  }
  }

