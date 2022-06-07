import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { Console } from 'console';
import { share } from 'rxjs';
import { Share } from 'src/app/models/share';
import { AddshareService } from 'src/app/services/addshare.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-updateshares',
  templateUrl: './updateshares.component.html',
  styleUrls: ['./updateshares.component.css']
})
export class UpdatesharesComponent implements OnInit {
  shareForm!:FormGroup;
  share!:Share;
  shareId!:number;

  constructor(private formBuilder:FormBuilder,
    private shareService:ShareService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.shareId=this.route.snapshot.params['ShareId'];
    this.shareService.getById(this.shareId).subscribe(share=>{
      console.log(Share);

      this.shareForm=new FormGroup({
        Id:new FormControl(this.shareId),
        name:new FormControl(share.shareName),
        price:new FormControl(share.sharePrice),
        quantity:new FormControl(share.shareQuantity)
      });
    })
  }

  onFormSubmit(form:NgForm){
    this.shareService.update(this.shareId,form).subscribe(result=>{
      alert('Share Updated');
      this.router.navigate(['/sharelist']);
    }, err=>{
      alert(err);
    });
  }
}
