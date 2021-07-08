import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminRoutingModule } from './admin-routing.module';

import {
  AdminComponent,
  DashboardComponent,
  UserComponent,
  RightsComponent,
} from './pages';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AdminRoutingModule,
    SharedModule,
  ],
  providers: [],
  declarations: [
    AdminComponent,
    DashboardComponent,
    UserComponent,
    RightsComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AdminComponent,
    DashboardComponent,
  ],
})
export class AdminModule {}
