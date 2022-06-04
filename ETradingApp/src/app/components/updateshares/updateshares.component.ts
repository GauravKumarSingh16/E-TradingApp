import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { Console } from 'console';
import { share } from 'rxjs';
import { AddshareService } from 'src/app/services/addshare.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-updateshares',
  templateUrl: './updateshares.component.html',
  styleUrls: ['./updateshares.component.css']
})
export class UpdatesharesComponent implements OnInit {
  shareForm!:FormGroup;

  constructor(private shareService:AddshareService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.shareForm=new FormGroup({
      sharename:new FormControl(),
      ShareQuantity:new FormControl(),
      SharePrice:new FormControl()
    });
  }

  onFormSubmit(form:NgForm){
    this.shareService.add(form).subscribe(result=>{
      alert('Share Added');
      this.router.navigate(['shares']);
    },err=>{
      alert(err);
    })
  }
}
