import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

import { SecurityService } from '../../../security/security.service';
import { AppUserAuth } from '..//../../security/app-user-auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private securityService: SecurityService,
    private router: Router,
    private mediaObserver: MediaObserver
  ) {
    this.securityObject = securityService.securityObject;
  }
  mediaSub: any;
  securityObject: any = null;
  deviceXs: boolean = false;

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias == 'xs' ? true : false;
      }
    );
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  logout(): void {
    this.securityService.logout();
    this.router.navigate(['/login']);
  }
}
