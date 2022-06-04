import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';



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
}
