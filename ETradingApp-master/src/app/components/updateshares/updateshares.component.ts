import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { Console } from 'console';
import { share } from 'rxjs';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-updateshares',
  templateUrl: './updateshares.component.html',
  styleUrls: ['./updateshares.component.css']
})
export class UpdatesharesComponent implements OnInit {
  shareForm!:FormGroup;
  ShareId!:number;

  constructor(private shareService:ShareService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ShareId=this.route.snapshot.params['id'];
    this.shareService.getById(this.ShareId).subscribe(share=>{
      console.log(share);
    this.shareForm=new FormGroup({
      id:new FormControl(this.ShareId),
      sharename:new FormControl(share.shareName),
      shareprice:new FormControl(share.sharePrice),
      sharequantity:new FormControl(share.ShareQuantity)
    });
    })
  }

  onFormSubmit(form:NgForm){
    this.shareService.update(this.ShareId,form).subscribe(result=>{
      alert('Share Updated');
      this.router.navigate(['shares']);
    },err=>{
      alert(err);
    })
  }
}
