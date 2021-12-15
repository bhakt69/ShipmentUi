import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user';
import { TokenStorageService } from '../service/token-storage.service';
import { UserService } from '../service/user.service';

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
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  showUserRoutes: boolean;
  showAdminRoutes: boolean;
  userProfileName: string;

  ngOnInit(): void {
    if(this.isLoggedIn()){
      if(this.tokenStorage.getUserRole() == 'User'){
        this.showUserRoutes = true;
        this.showAdminRoutes = false;        
      }
      else{
        this.showAdminRoutes = true;
        this.showUserRoutes = false;
      }
      this.getUserProfile();
    }
  }

  public isLoggedIn(): boolean {
    if(localStorage.getItem(TOKEN_KEY)){
      return true;
    }
    else{
      return false;
    }
  }

  public logout() {
    // localStorage.removeItem("id_token");
    this.tokenStorage.logout();
    this.router.navigateByUrl('login');
  }

  public getUserProfile(){
    this.userService.getProfile().subscribe(
      (response: any) => {
        this.userProfileName = response.firstName + ' ' +response.lastName;
      }
    );
  }
}