import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { Console } from 'console';
import { BusinessownerService } from 'src/app/services/business-owner.service';


@Component({
  selector: 'app-businessowner',
  templateUrl: './businessowner.component.html',
  styleUrls: ['./businessowner.component.css']
})
export class BusinessownerComponent implements OnInit {
  businessownerForm!:FormGroup;

  constructor(private businessOwnerService:BusinessownerService,
    private router:Router)  { }

  ngOnInit(): void {
     this.businessownerForm=new FormGroup({
      BusinessOwnerId:new FormControl(),
      UserName:new FormControl(),
      BusinessOwnerName:new FormControl(),
      BusinessownerType:new FormControl(),
      BusinessownerEmail:new FormControl()
    });
  }

  onFormSubmit(form:NgForm){
    this.businessOwnerService.add(form).subscribe(result=>{
      alert('businessowner Added');
      this.router.navigate(['businessowners']);
    },(err: any)=>{
      alert(err);
    })
  }
}
