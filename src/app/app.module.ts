import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './material/angular-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';

/* component list*/
import { AppComponent } from './app.component';

/** feature module */
import { HomeModule } from './home';
import { SharedModule } from './shared';
import { DemoAppModule } from './demo-app';
import { AdminModule } from './admin';

import { LoginComponent } from './security/login.component';
import { MaterialElevationDirective } from './material/material-elevation.directive';

@NgModule({
  declarations: [AppComponent, LoginComponent, MaterialElevationDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HomeModule,
    SharedModule,
    DemoAppModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
