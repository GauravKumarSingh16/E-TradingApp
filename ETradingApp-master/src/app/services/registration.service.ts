import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  apiUrl =`${environment.baseApiUrl}/registrations`;
  constructor(private client:HttpClient) { }
  add(registration:any):Observable<Registration>
  {
    return this.client.post<Registration>(this.apiUrl,registration);
  }
}