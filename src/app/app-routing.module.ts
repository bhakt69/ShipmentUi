import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { AppComponent } from './app.component';
import { BookingFormComponent } from './booking-form/booking-form.component';

const routes: Routes = [
  {path : '', component : HomePageComponent},
  {path : 'home', component : HomePageComponent},
  {path : 'tracking', component : TrackingPageComponent},
  {path : 'booking', component : BookingFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
