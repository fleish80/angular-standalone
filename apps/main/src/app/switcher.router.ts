import {Routes} from '@angular/router';
import {ENVIRONMENT_INITIALIZER, inject} from '@angular/core';
import {SwitcherService} from 'apps/main/src/app/switcher.service';

export const switcherRouter: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'on'
  },
  {
    path: 'on',
    loadComponent: () => import('./switch-on.component').then(c => c.SwitchOnComponent),
    title: 'Switch ON',
  },
  {
    path: 'off',
    loadComponent: () => import('./switch-off.component').then(c => c.SwitchOffComponent),
    title: 'Switch OFF',
    providers: [
      {
        provide: ENVIRONMENT_INITIALIZER,
        multi: true,
        useValue() {
          inject(SwitcherService).init();
        },
      },
    ],
  }

]
