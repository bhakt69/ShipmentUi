import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TrackingService } from '../service/tracking-service.service';
import { Params, Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tracking-page',
  templateUrl: './tracking-page.component.html',
  styleUrls: ['./tracking-page.component.css']
})
export class TrackingPageComponent implements OnInit{

  val: number = 0;
  stringifiedData: any;
  trackingId: any;

  
  constructor(private trackingService: TrackingService,
    private toastr: ToastrService,
    private Activatedroute:ActivatedRoute,
    private router:Router){    
  }

  ngOnInit(){
    this.trackingId = this.Activatedroute.snapshot.queryParamMap.get('trackingId')||0;
    if(this.trackingId){
      this.trackingService.trackPackage(this.trackingId).subscribe(
        (response: any) => {
          this.toastr.clear();
          this.stringifiedData = Array.of(response);
          // console.log(this.stringifiedData);
        },
        (error: HttpErrorResponse) => {
          this.toastr.clear();
          this.toastr.error(error.error.errorMessage, 'Error');
        }
      );
    }
  }

  onSubmit(f : NgForm){
    this.trackingService.trackPackage(f.value['trackingId']).subscribe(
      (response: any) => {
        this.toastr.clear();
        this.stringifiedData = Array.of(response);
        // console.log(this.stringifiedData);
      },
      (error: HttpErrorResponse) => {
        this.toastr.clear();
        this.toastr.error(error.error.errorMessage, 'Error');
        this.stringifiedData = '';
      }
    );
  }


  isDispatched(){
    if(this.val == 1){
      return true;
    }
    else return false;
  }
  isDeparted(){
    if(this.val == 2){
      return true;
    }
    else return false;
  }
  isDestined(){
    if(this.val == 3){
      return true;
    }
    else return false;
  }
  isSuccessful(){
    if(this.val == 4){
      return true;
    }
    else return false;
  }
}
