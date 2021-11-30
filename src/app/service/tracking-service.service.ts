import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tracking } from '../model/tracking';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private baseUrl = environment.usersUrl;

  constructor(private http: HttpClient) { }

  public trackPackage(): Observable<Tracking[]> {
    return this.http.get<Tracking[]>(this.baseUrl+'/user/all-users');
  }

  // public userRegister(): Observable<User[]>{
  //   return this.http.post<User[]>(this.usersUrl+/'user/register');
  // }
}