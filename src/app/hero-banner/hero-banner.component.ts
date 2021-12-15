import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TrackingService } from '../service/tracking-service.service';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent implements OnInit {

  constructor(
    private router: Router,
    private trackingService: TrackingService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }


  onSubmit(f : NgForm){
    this.trackingService.trackPackage(f.value['trackingId']).subscribe(
      (response: any) => {
        this.router.navigate(['/tracking'], { queryParams: { trackingId: f.value['trackingId'] } }); 
      },
      (error: any) => {
        this.toastr.clear();
        this.toastr.error(error.error.errorMessage, 'Error');
      }
    );
  }

}
