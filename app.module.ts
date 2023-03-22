import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';

import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { GuestModule } from './guest/guest/guest.module';
import { HomeComponent } from './home/home.component';
import { InventoryModule } from './inventory/inventory/inventory.module';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { ReceptionistDashboardComponent } from './receptionist-dashboard/receptionist-dashboard.component';
import { ReservationModule } from './reservation/reservation/reservation.module';
import { RoomModule } from './room/room/room.module';
import { StaffModule } from './staff/staff/staff.module';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReceptionistDashboardComponent,
    ManagerDashboardComponent,
    OwnerDashboardComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthenticationModule,
    HttpClientModule,
    StaffModule,
    InventoryModule,
    ReservationModule,
    GuestModule,
    RoomModule
  ],
  providers: [
{        
  provide: HTTP_INTERCEPTORS,        
  useClass: TokeninterceptorService,        
  multi: true    
}


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
