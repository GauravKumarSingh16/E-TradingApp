import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { Console } from 'console';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm!:FormGroup;

  constructor(private customerservice:CustomerService,
    private router:Router)  { }

  ngOnInit(): void {
     this.customerForm=new FormGroup({
      CustomerId:new FormControl(),
      UserName:new FormControl(),
      Password:new FormControl(),
      CustomerName:new FormControl(),
      CustomerEmail:new FormControl(),
      ContactNo:new FormControl(),
      Address:new FormControl()
      
    });
  }

  onFormSubmit(form:NgForm){
    this.customerservice.add(form).subscribe(result=>{
      alert('customer Added');
      this.router.navigate(['customers']);
    },(err: any)=>{
      alert(err);
    })
  }
}