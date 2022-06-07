import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  
    companyForm!:FormGroup;
  
    constructor(private companyService:CompanyService,
      private router:Router)  { }
  
    ngOnInit(): void {
       this.companyForm=new FormGroup({
        CompanyId:new FormControl(),
        CompanyName:new FormControl(),
        CompanyEmail:new FormControl(),
        ContactNo:new FormControl(),
        Address:new FormControl()
   });
    }
  
    onFormSubmit(form:NgForm){
      this.companyService.add(form).subscribe(result=>{
        alert('company Added');
        this.router.navigate(['company']);
      },(err: any)=>{
        alert(err);
      })
    }
  }
