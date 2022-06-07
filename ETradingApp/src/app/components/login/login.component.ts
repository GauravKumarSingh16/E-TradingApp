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
   UserName:new FormControl(),
   Password:new FormControl(),
   UserType:new FormControl()
    });
  }
onSubmit(form:NgForm)
{
  this.loginService.add(form).subscribe(login=>{
    alert('Form Submit');
    console.log(login);
    localStorage.setItem('userInfo',JSON.stringify(login));
   if(login.UserType=="customer")
   { 
    this.router.navigate(['/shares']);
   } 
   else if(login.UserType=="businessowner")
    {
    this.router.navigate(['/addshares']);
    }
    else
   this.router.navigate(['']);
  }, err=>{
    alert('Failed');
    console.log(err);
  })
}
}