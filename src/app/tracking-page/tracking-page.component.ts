import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrackingService } from '../service/tracking-service.service';

@Component({
  selector: 'app-tracking-page',
  templateUrl: './tracking-page.component.html',
  styleUrls: ['./tracking-page.component.css']
})
export class TrackingPageComponent implements OnInit{

  val: number = 0;
  stringifiedData: any;

  ngOnInit(){
  }
  constructor(private trackingService: TrackingService){
    
  }

  onSubmit(f : NgForm){
    this.trackingService.trackPackage(f.value['trackingId']).subscribe(
      (response: any) => {
        this.stringifiedData = Array.of(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
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
