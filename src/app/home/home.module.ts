import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent, AboutComponent, ContactComponent } from './pages';

import { SharedModule } from '../shared';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  providers: [],
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  exports: [HomeComponent, AboutComponent],
})
export class HomeModule {}
