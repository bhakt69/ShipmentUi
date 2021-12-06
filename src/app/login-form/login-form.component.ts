import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { User } from '../model/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

   

  model:User={
    firstName:'',
    lastName:'',
    contactNumber:'',
    email:'',
    address:'',
    password:'',
    };
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit(loginForm:NgForm){
    console.log(loginForm.value);
}
}
