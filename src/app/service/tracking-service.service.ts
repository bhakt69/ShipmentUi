import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tracking } from '../model/tracking';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080';
  }

  public trackPackage(): Observable<Tracking[]> {
    return this.http.get<Tracking[]>(this.usersUrl+'/tracking');
  }
}