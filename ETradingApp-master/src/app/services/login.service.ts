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
}
