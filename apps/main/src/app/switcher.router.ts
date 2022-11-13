import {Routes} from '@angular/router';

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
    title: 'Switch OFF'
  }

]
