import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    user! : string;
    users! : User[];

    constructor(public userService:UserService, public router : Router) { }

    ngOnInit() {
       
        this.userService.getUserList().subscribe(users=>{
            this.users=users;
            console.log(users);
          }, err=>{
          console.log(err);
          });
          //this.user=JSON.parse(localStorage.getItem('userinfo')!).username;
          //console.log(JSON.parse(localStorage.getItem('userinfo')!).username);
  
    }
    
    
    onLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        //this.userService.success('You are logged out !');
    }

    Logout(){
        this.userService.logout();
        //Login
       this.router.navigate(['/logins']);
      }

}
