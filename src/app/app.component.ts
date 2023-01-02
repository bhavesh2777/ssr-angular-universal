import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ssr-angular-universal';
  constructor(@Inject(PLATFORM_ID) private platformId) {}
}
