import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ETradingApp';
  constructor(public userService:UserService,private router:Router) { }
 logout(){
   this.userService.logout();
   this.router.navigate(['/login']);
 }
}
