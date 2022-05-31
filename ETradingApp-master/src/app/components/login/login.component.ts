import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
  constructor(private loginService:LoginService,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
   userName:new FormControl(),
   password:new FormControl(),
   usertype:new FormControl()
    });
  }
onSubmit(form:NgForm)
{
  this.loginService.add(form).subscribe(result=>{
    alert('Form Submit');
    console.log(result);
   if(result.usertype=="customer")
   { 
    this.router.navigate(['/properties']);
   } 
   else if(result.usertype=="businessowner")
    {
    this.router.navigate(['/showproperties']);
    }
    else
   this.router.navigate(['/adminpages']);
  }, err=>{
    alert('Failed');
    console.log(err);
  })
}
}