import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Login } from '../models/login';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly inspectionAPIUrl ="https://localhost:44375/api";
  apiUrl=`${environment.baseApiUrl}/users`;
  constructor(private client:HttpClient) { }
  register(user:any):Observable<User>{
    return this.client.post<User>(this.apiUrl,user);
  }
  
  login(user:any):Observable<Login>{
   return this.client.post<Login>(`${this.apiUrl}/logins`,user);
 }
  getInspectionList():Observable<any[]> {
    return this.client.get<any>(this.inspectionAPIUrl + '/users');
  }

  addInspection(data:any) {
    return this.client.post(this.inspectionAPIUrl + '/users', data);
  }

  updateInspection(id:number|string, data:any) {
    return this.client.put(this.inspectionAPIUrl + `/users/${id}`, data);
  }

  deleteInspection(id:number|string) {
    return this.client.delete(this.inspectionAPIUrl + `/users/${id}`);
  }

  // Inspection Types
  getInspectionTypesList():Observable<any[]> {
    return this.client.get<any>(this.inspectionAPIUrl + '/inspectionTypes');
  }

  addInspectionTypes(data:any) {
    return this.client.post(this.inspectionAPIUrl + '/inspectionTypes', data);
  }

  updateInspectionTypes(id:number|string, data:any) {
    return this.client.put(this.inspectionAPIUrl + `/inspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id:number|string) {
    return this.client.delete(this.inspectionAPIUrl + `/inspectionTypes/${id}`);
  }

  // Statuses
  getStatusList():Observable<any[]> {
    return this.client.get<any>(this.inspectionAPIUrl + '/status');
  }

  addStatus(data:any) {
    return this.client.post(this.inspectionAPIUrl + '/status', data);
  }

  updateStatus(id:number|string, data:any) {
    return this.client.put(this.inspectionAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string) {
    return this.client.delete(this.inspectionAPIUrl + `/status/${id}`);
  }

  Login(id:number):Observable<User>{
    return this.client.get<User>(`${this.apiUrl}/${id}`);
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

  getUserList():Observable<User[]>{
    return this.client.get<User[]>(this.apiUrl)
  }
  getById(id:number): Observable<User>{
    return this.client.get<User>(`${this.apiUrl}/${id}`);
  }

  update(id:number, user:any): Observable<any>{
    return this.client.put(`${this.apiUrl}/${id}`,user);
  }
  
}
