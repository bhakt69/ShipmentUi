import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.usersUrl;

  constructor(private http: HttpClient) { }

  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl+'/registration/register', user);
  }

}
