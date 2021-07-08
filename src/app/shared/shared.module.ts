import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent, FooterComponent } from './layout';
import { ThemeChangerComponent } from './layout/theme-changer/theme-changer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  declarations: [HeaderComponent, FooterComponent, ThemeChangerComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    FooterComponent,
    ThemeChangerComponent,
  ],
})
export class SharedModule {}
