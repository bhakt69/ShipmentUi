import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { BookingModalComponent } from './booking-modal/booking-modal.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { FormGroup, FormControl, FormsModule} from '@angular/forms';
import { TrackingService } from './service/tracking-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TrackingListComponent } from './tracking-list/tracking-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    TrackingPageComponent,
    HeroBannerComponent,
    BookingModalComponent,
    BookingFormComponent,
    RegisterFormComponent,
    LoginFormComponent,
    TrackingListComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [TrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
