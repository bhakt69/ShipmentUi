import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  onSubmit(f : NgForm){
    
    this.router.navigate(['/tracking'], { queryParams: { trackingId: f.value['trackingId'] } }); 
  }

}
