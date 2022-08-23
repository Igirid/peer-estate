import { Component, Input, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/custom';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @Input() form : LoginForm = {
    email: '',
    password: '',
    remember: false,
  }

  ngOnInit(): void {
  }

  login() : void{

  }

}
