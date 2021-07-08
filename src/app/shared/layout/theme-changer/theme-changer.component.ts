import { Component, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.css'],
})
export class ThemeChangerComponent {
  constructor(public overlayContainer: OverlayContainer) {}

  @HostBinding('class') componentCssClass: any;

  onSetTheme(theme: string) {
    debugger;
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
