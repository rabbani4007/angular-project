import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IUser } from '../user/user.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  @ViewChild('sidenav') sidenav: any;
  user: IUser = {
    id: 0,
    firstName: 'Mohammad',
    lastName: 'Rabbani',
    email: 'abc@gmail.com',
    age: 20,
    gender: 'Male',
  };
}
