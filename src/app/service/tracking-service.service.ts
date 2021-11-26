import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tracking } from '../model/tracking';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private usersUrl = environment.usersUrl;

  constructor(private http: HttpClient) { }

  public trackPackage(): Observable<Tracking[]> {
    return this.http.get<Tracking[]>(this.usersUrl+'/user/all-users');
  }
}