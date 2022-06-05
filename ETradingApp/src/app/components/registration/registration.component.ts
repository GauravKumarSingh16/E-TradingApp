import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  

  RegistrationForm!: FormGroup;
  pass: string ="";
  cnfpass: string = "";


  constructor(private registrationservice:RegistrationService,
    private router:Router)  { }


  ngOnInit(): void {
    this.RegistrationForm=new FormGroup({
      Name:new FormControl(), 
      UserName:new FormControl(),
      Password:new FormControl(), 
      Email:new FormControl(),
      Address: new FormControl(),
      ContactNo:new FormControl(),
      UserType:new FormControl()
    });
  }
onSubmit(form:NgForm)
{
  
    this.registrationservice.add(form).subscribe(result=>{
      console.log(result);
      alert('form is submitted');
      this.router.navigate(['/logins']);
    }, err=>{
      alert('Register Failed');
      console.log(err);
    })
    
  
}


}