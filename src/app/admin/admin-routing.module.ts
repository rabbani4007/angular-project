import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AdminComponent,
  DashboardComponent,
  UserComponent,
  RightsComponent,
} from './pages';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
// ];

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UserComponent },
      { path: 'rights', component: RightsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
