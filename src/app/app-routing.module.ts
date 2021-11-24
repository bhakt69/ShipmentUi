import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { TrackingPageComponent } from './tracking-page/tracking-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : 'home', component : HomePageComponent},
  {path : 'tracking', component : TrackingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
