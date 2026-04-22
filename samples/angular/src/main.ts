/// <reference path="../node_modules/@digitalpersona/websdk/dts/websdk.client.d.ts" />

import { provideZoneChangeDetection } from "@angular/core";

/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {providers: [provideZoneChangeDetection(),provideProtractorTestingSupport()]}).catch((err) =>
  console.error(err),
);
