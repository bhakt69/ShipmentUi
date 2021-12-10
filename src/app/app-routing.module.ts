import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TrackingListComponent } from './tracking-list/tracking-list.component';
import { OrderListComponent } from './order-list/order-list.component';
<<<<<<< Updated upstream
import { EditBookingComponent } from './edit-booking/edit-booking.component';
=======
import { BookingCompleteComponent } from './booking-complete/booking-complete.component';  
>>>>>>> Stashed changes

const routes: Routes = [
  {path : '', component : HomePageComponent},
  {path : 'home', component : HomePageComponent},
  {path : 'tracking', component : TrackingPageComponent},
  {path : 'booking', component : BookingFormComponent},
  {path : 'register', component : RegisterFormComponent},
  {path : 'login',component : LoginFormComponent},
  {path : 'tracking-list', component : TrackingListComponent},
  {path : 'all-orders', component: OrderListComponent},
<<<<<<< Updated upstream
  {path : 'EditBooking', component:EditBookingComponent}
=======
  {path : 'booking/completed', component: BookingCompleteComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

