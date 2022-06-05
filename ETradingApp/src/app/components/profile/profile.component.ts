import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId! :number;
  user!: User;
  userForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private userService:UserService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['customerId'];
    this.userService.getById(this.userId).subscribe(user=>{
      console.log(User);

      this.userForm=new FormGroup({
        Id:new FormControl(this.userId),
        fullname:new FormControl(user.Name),
        password:new FormControl(user.Password),
        email:new FormControl(user.Email),
        address:new FormControl(user.Address),
        phoneNumber:new FormControl(user.ContactNo),
        userType:new FormControl(user.UserType)
      });
    })
  }
  onFormSubmit(form:NgForm){
    this.userService.update(this.userId,form).subscribe(result=>{
      alert('Profile Updated');
      this.router.navigate(['/addshares']);
    }, err=>{
      alert(err);
    });
  }

}
