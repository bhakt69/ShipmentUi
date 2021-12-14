import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TrackingListComponent } from './tracking-list/tracking-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { BookingCompleteComponent } from './booking-complete/booking-complete.component';
import { BookingModalComponent } from './booking-modal/booking-modal.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component : HomePageComponent},
  {path : 'tracking', component : TrackingPageComponent},
  {path : 'booking', component : BookingFormComponent},
  {path : 'register', component : RegisterFormComponent},
  {path : 'login',component : LoginFormComponent},
  {path : 'tracking-list', component : TrackingListComponent},
  {path : 'all-orders', component: OrderListComponent},
  {path : 'booking/completed', component: BookingCompleteComponent},
  {path : 'booking/modal', component: BookingModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

