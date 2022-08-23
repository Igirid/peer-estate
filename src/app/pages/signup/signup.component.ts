import { Component, OnInit } from '@angular/core';
import { SignupForm } from 'src/app/custom';

// import { Form } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  form: SignupForm = {
    name: 'Janeth',
    email: '',
    password: '',
    confirmation: '',
    terms: false,
    subscribe: false,
  }

  ngOnInit(): void {
  }

  signup() : void {
    console.log('should sign up here');
  }

}
