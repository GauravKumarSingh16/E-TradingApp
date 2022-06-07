import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import{Customer} from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl =`${environment.baseApiUrl}/customers`;

 constructor(private client:HttpClient) {}
 add(customer:any):Observable<Customer>
 {
   return this.client.post<Customer>(this.apiUrl,customer);
 }

 register(customer:any):Observable<Customer>
  {
    return this.client.post<Customer>(this.apiUrl,customer);
  }

  getById(CustomerId:number):Observable<Customer>{
    //https://localhost:44375/api
    return this.client.get<Customer>(`${this.apiUrl}/${CustomerId}`);
  }

  update(CustomerId:number,customer:any):Observable<any>{
    return this.client.put(`${this.apiUrl}/${CustomerId}`,customer);
  }
}
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';
// import{Customer} from 'src/app/models/customer';
// import { NgForm } from '@angular/forms';

// @Injectable({
//   providedIn: 'root'
// })
// export class CustomerService {
//   add(form: NgForm) {
//     throw new Error('Method not implemented.');
//   }

//   apiUrl =`${environment.baseApiUrl}/customers`;

//  constructor(private client:HttpClient) {}
//  register(customer:any):Observable<Customer>
//   {
//     return this.client.post<Customer>(this.apiUrl,customer);
//   }
// }