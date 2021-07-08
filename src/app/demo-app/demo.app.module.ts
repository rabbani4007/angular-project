import { NgModule } from '@angular/core';
import { DemoAppRoutingModule } from './demo-app-routing.module';

import {
  WeatherComponent,
  NewsComponent,
  NewsCardComponent,
  DemoComponent,
} from './components';

import { SharedModule } from '../shared';

@NgModule({
  imports: [DemoAppRoutingModule, SharedModule],
  providers: [],
  declarations: [
    WeatherComponent,
    NewsComponent,
    NewsCardComponent,
    DemoComponent,
  ],
  exports: [WeatherComponent, NewsComponent, NewsCardComponent, DemoComponent],
})
export class DemoAppModule {}
