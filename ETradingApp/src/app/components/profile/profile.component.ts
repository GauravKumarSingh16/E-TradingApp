import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Id! :number;
  customer!: Customer;
  customerForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private customerService:CustomerService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id=this.route.snapshot.params['Id'];
    this.customerService.getById(this.Id).subscribe(customer=>{
      console.log(Customer);

      this.customerForm=new FormGroup({
        userId:new FormControl(this.Id),
        fullname:new FormControl(customer.CustomerName),
        username:new FormControl(customer.UserName),
        password:new FormControl(customer.Password),
        email:new FormControl(customer.CustomerEmail),
        address:new FormControl(customer.Address),
        phoneNumber:new FormControl(customer.ContactNo),
        userType:new FormControl(customer.UserType)
      });
    })
  }
  onFormSubmit(form:NgForm){
    this.customerService.update(this.Id,form).subscribe(result=>{
      alert('Profile Updated');
      this.router.navigate(['/addshares']);
    }, err=>{
      alert(err);
    });
  }

}
