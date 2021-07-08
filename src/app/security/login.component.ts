import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
import { SecurityService } from './security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  user: AppUser = new AppUser();
  securityObject: any = null;

  ngOnInit(): void {}

  login() {
    this.securityService.login(this.user).subscribe((resp) => {
      this.securityObject = resp;
      if (this.securityObject.isAuthenticated) {
        this.router.navigate(['/home']);
      }
    });
  }
}
