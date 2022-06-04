import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl =`${environment.baseApiUrl}/users`; 

  constructor(private client:HttpClient) { }

  add(user:any):Observable<User>
  {
    return this.client.post<User>(this.apiUrl,user);
  }
  
  /*Login(user:any):Observable<User>{
    return this.client.post<User>(`${this.apiUrl}/login`,user);
  }
  isLoggedIn():boolean{
   // localStorage.setItem('userInfo',JSON.stringify(login));
    if(localStorage.getItem('userInfo')==null)
      return false;
    return true;
  }
  logout(){
     localStorage.removeItem('userInfo');
  }
  getUser():any{
    if(localStorage.getItem('userInfo')==null)
      return null;
    return JSON.parse(localStorage.getItem('userInfo')!);
  }*/
}
