import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { User2 } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.usersUrl;

  constructor(private http: HttpClient) { }

  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl+'/user/register', user);
  }

  public loginUser(user2: User2): Observable<User2> {
    return this.http.post<User2>(this.baseUrl+'/user/login', user2);
  }

  public logoutUser(){
    localStorage.removeItem("id_token");
  }

  public getProfile():Observable<User>{
    return this.http.get<User>(this.baseUrl + '/user/getProfile');
  }
  
}
