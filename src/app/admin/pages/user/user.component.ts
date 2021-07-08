import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
}
const USER_DATA: IUser[] = [
  {
    id: 1,
    firstName: 'Ghulam',
    lastName: 'Rabbani',
    email: 'rabbani4007@gmail.com',
    age: 20,
    gender: 'Male',
  },
  {
    id: 2,
    firstName: 'Arhaan',
    lastName: 'Rabbani',
    email: 'rabbani4007@gmail.com',
    age: 5,
    gender: 'Male',
  },
  {
    id: 3,
    firstName: 'Aimaan',
    lastName: 'Rabbani',
    email: 'rabbani4007@gmail.com',
    age: 3,
    gender: 'Male',
  },
  {
    id: 4,
    firstName: 'Tazzin',
    lastName: 'Ara',
    email: 'tazzin4007@gmail.com',
    age: 18,
    gender: 'Female',
  },
  {
    id: 1,
    firstName: 'Ghulam',
    lastName: 'Rabbani',
    email: 'rabbani4007@gmail.com',
    age: 20,
    gender: 'Male',
  },
  {
    id: 2,
    firstName: 'Arhaan',
    lastName: 'Rabbani',
    email: 'rabbani4007@gmail.com',
    age: 5,
    gender: 'Male',
  },
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements AfterViewInit {
  constructor() {}
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'age',
    'gender',
  ];
  //dataSource = USER_DATA;
  dataSource = new MatTableDataSource<IUser>(USER_DATA);
  @ViewChild(MatPaginator) paginator: any;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
