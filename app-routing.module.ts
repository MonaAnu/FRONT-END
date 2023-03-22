import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceptionistDashboardComponent } from './receptionist-dashboard/receptionist-dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: HomeComponent }
    ,
  {
    path: 'receptionist',
    component:ReceptionistDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manager',
    component:ManagerDashboardComponent
    ,
    canActivate: [AuthGuard],
  },
  {
    path: 'owner',
    component:OwnerDashboardComponent
    ,
    canActivate: [AuthGuard],
  },
  {
    path: 'payment',
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
