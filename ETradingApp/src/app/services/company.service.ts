import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl =`${environment.baseApiUrl}/companies`; 
  constructor(private client:HttpClient) { }
  add(company:any):Observable<Company>
  {
    return this.client.post<Company>(this.apiUrl,company);
  }
}