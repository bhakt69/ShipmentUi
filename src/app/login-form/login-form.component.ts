import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from "moment";
import { HttpClient } from '@angular/common/http';
import { User, User2 } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private userService : UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  model:User={
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    address: '',
    password: '',
    userid_pk: 0
  };

  ngOnInit(): void {
  }
  
  
  onSubmit(loginForm:NgForm){
    this.login(loginForm.value);
  }

  login( values: any ) {
    this.userService.loginUser(values).subscribe(
      (response: any) => {
        this.setSession(response.token);
        this.toastr.success('Login Success', 'Success');
        this.router.navigateByUrl('home');
      },
      (error: any) => {
        this.toastr.error(error.error.errorMessage, 'Login Failed');
      }
    );
  }


  private setSession(token: any) {
    localStorage.setItem('id_token', token);
  }          

  logout() {
      localStorage.removeItem("id_token");
  }

  isLoggedIn() {
    if(localStorage.getItem("id_token")){
      return true;
    }
    else{
      return false;
    }
      // return moment().isBefore(this.getExpiration());
  }

  // isLoggedOut() {
  //     return !this.isLoggedIn();
  // }

  // getExpiration() {
  //     const expiration = localStorage.getItem("expires_at");
  //     const expiresAt = JSON.parse(expiration);
  //     return moment(expiresAt);
  // }

}