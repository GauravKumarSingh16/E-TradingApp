import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Share } from '../models/share';

@Injectable({
  providedIn: 'root'
})
export class AddshareService {
  apiUrl =`${environment.baseApiUrl}/shares`; 

  constructor(private client:HttpClient) { }
  add(share:any):Observable<Share>
  {
    return this.client.post<Share>(this.apiUrl,share);
  }
}
