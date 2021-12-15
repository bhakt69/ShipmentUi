import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  user: any;

  ngOnInit(): void {
    if(this.isLoggedIn()){
      if(this.tokenStorage.getUserRole() == 'User'){
        this.showUserRoutes = true;
        this.showAdminRoutes = false;
        
      }
      else{
        this.showAdminRoutes = true;
        this.showUserRoutes = false;
        console.log('out')
      }
      console.log(this.tokenStorage.getUserRole() == 'User')
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
        console.log(response);
      },
      (error: any) => {
        this.toastr.error('Error', 'Error');
      }
    );
  }
}