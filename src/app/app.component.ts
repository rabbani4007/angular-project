import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

import { SecurityService } from './security/security.service';
import { AppUserAuth } from './security/app-user-auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-first-project';
  // mediaSub: any;
  // securityObject: any = null;
  // deviceXs: boolean = false;

  constructor(
    private securityService: SecurityService,
    private router: Router,
    private mediaObserver: MediaObserver
  ) {
    //this.securityObject = securityService.securityObject;
  }

  ngOnInit(): void {
    // this.mediaSub = this.mediaObserver.media$.subscribe(
    //   (result: MediaChange) => {
    //     console.log(result.mqAlias);
    //     this.deviceXs = result.mqAlias == 'xs' ? true : false;
    //   }
    // );
  }

  ngOnDestroy(): void {
    //this.mediaSub.unsubscribe();
  }
}
