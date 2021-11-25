import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tracking-page',
  templateUrl: './tracking-page.component.html',
  styleUrls: ['./tracking-page.component.css']
})
export class TrackingPageComponent {

  val: number = 0;

  onSubmit(f : NgForm){
    this.val = f.value.trackingId.length;
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
