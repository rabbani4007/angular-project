import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent, NewsComponent, DemoComponent } from './components';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'weather', component: WeatherComponent },
// ];

const routes: Routes = [
  {
    path: 'demo-app',
    component: DemoComponent,
    children: [
      { path: 'weather', component: WeatherComponent },
      { path: 'news', component: NewsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DemoAppRoutingModule {}
