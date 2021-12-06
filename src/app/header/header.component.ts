import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(
    private router: Router
  ) { }

  // public loginRegisterCheck(){
  //   console.log('hello');
  // }

  public isLoggedIn(): boolean {
    if(localStorage.getItem("id_token")  ){
      return true;
    }
    else{
      return false;
    }
  }

  public logout() {
    localStorage.removeItem("id_token");
    this.router.navigateByUrl('home');
  }
}