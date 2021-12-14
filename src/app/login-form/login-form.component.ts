import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from "moment";
import { HttpClient } from '@angular/common/http';
import { User, User2 } from '../model/user';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
    
    isLoggedIn= false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    

    ngOnInit(): void {
      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUserRole().roles;
      }
    }

  constructor(
    private userService : UserService,
    private toastr: ToastrService,
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) { }

  model:User={
    firstName: '',
    lastName: '',
    passwordconf: '',
    contactNumber: '',
    email: '',
    address: '',
    password: '',
    userid_pk: 0
  };
  
  
  onSubmit(loginForm:NgForm){
    this.login(loginForm.value);
  }

  login( values: any ) {
    this.userService.loginUser(values).subscribe(
      (response: any) => {
        this.tokenStorage.saveToken(response.token);
        this.tokenStorage.saveUserRole(response);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        this.toastr.success('Login Success', 'Success');
        this.router.navigateByUrl('home');
      },
      (error: any) => {
        this.toastr.error(error.error.errorMessage, 'Login Failed');
      }
    );
  }         

  reloadPage(): void {
    window.location.reload();
  }
  
}