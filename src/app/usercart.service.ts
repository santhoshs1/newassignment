import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsercartService {

  baseURL: string;

  cartItemcount$ = new Subject<any>();

  constructor(private http: HttpClient) {
    this.baseURL = '/api/user/';
  }

  registerUser(userdetails:any) {
    return this.http.post(this.baseURL, userdetails)
      .pipe(map(response => {
        return response;
      }));
  }

  getCartItemCount(userId: number) {
    return this.http.get(this.baseURL + userId)
      .pipe(map(response => {
        return response;
      }));
  }

  validateUserName(userName: string) {
    return this.http.get(this.baseURL + 'validateUserName/' + userName)
      .pipe(map(response => {
        return response;
      }));
  }
}
