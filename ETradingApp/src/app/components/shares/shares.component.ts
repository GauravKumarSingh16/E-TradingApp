import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { Share } from 'src/app/models/share';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.css']
})
export class SharesComponent implements OnInit {

  ShareList!:Share[];

  constructor(private shareService:ShareService){}

  ngOnInit(): void {
    this.shareService.getShareList().subscribe(shares=>{
      this.ShareList=shares;
      console.log(shares);
    },err=>{
      console.log(err);
    });
  }
  
  buyShare(){
    alert("Share Buy Successfully");
  }
}