import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { TokenStorageService } from '../service/token-storage.service';
import { ToastrService } from 'ngx-toastr';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private _location: Location,
    private toastr: ToastrService
  ) { }

  showUserRoutes: boolean;
  showAdminRoutes: boolean;
  user: any;

  ngOnInit(): void {
    if(this.isLoggedIn()){
      if(this.tokenStorage.getUserRole().user == 'user'){
        this.showUserRoutes = true;
        this.showAdminRoutes = false;
        
      }
      else{
        this.showAdminRoutes = true;
        this.showUserRoutes = false;
        console.log('out')
      }
    }
  }

  public isLoggedIn(): boolean {
    if(localStorage.getItem(TOKEN_KEY)  ){
      return true;
    }
    else{
      return false;
    }
  }

  public logout() {
    // localStorage.removeItem("id_token");
    this.tokenStorage.logout();
    this.router.navigateByUrl('home');
  }
}