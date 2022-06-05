import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl=`${environment.baseApiUrl}/users`;
  constructor(private client:HttpClient) { }
  register(user:any):Observable<User>{
    return this.client.post<User>(this.apiUrl,user);
  }
  login(user:any):Observable<User>{
    return this.client.post<User>(this.apiUrl,user);
  }
  isLoggedIn():boolean{
    if(localStorage.getItem('userInfo')==null)
      return false;
    return true;
  }
  logout(){
    localStorage.removeItem('userinfo');
  }

  getUser():any{
    if(localStorage.getItem('userInfo')==null)
      return null;
   return JSON.parse(localStorage.getItem('userInfo')!);

  }

  getById(customerId:number):Observable<User>{
    //https://localhost:44375/api
    return this.client.get<User>(`${this.apiUrl}/${customerId}`);
  }

  update(customerId:number,user:any):Observable<any>{
    return this.client.put(`${this.apiUrl}/${customerId}`,user);
  }
}
