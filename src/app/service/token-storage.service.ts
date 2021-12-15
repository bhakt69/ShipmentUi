import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {

  constructor() { }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUserRole(roleName: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, roleName);
  }

  public getUserRole(): any {
    console.log(localStorage.getItem(USER_KEY))
    return localStorage.getItem(USER_KEY);
  }

  public logout() {
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    if(localStorage.getItem(TOKEN_KEY)  ){
      return true;
    }
    else{
      return false;
    }
  }
}
