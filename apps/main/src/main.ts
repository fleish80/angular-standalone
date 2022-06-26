import {enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'user', loadComponent: () => import('./app/user/user.component').then(m => m.UserComponent)}
];


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {providers: [importProvidersFrom(RouterModule.forRoot(routes))]})
  .catch((err) => console.error(err));
