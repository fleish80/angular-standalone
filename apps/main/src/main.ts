import {enableProdMode, importProvidersFrom, inject} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
  NoPreloading,
  provideRouter,
  Routes,
  TitleStrategy,
  withPreloading
} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {TemplatePageTitleStrategy} from './app/template-page.title-strategy';
import {CanActivateTestService} from './app/can-activate-test.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user'
  },
  {
    path: 'user',
    loadComponent: () => import('./app/user.component').then(c => c.UserComponent),
    title: 'User',
    canMatch: [() => inject(CanActivateTestService).canActivate()]
  },
  {
    path: 'user',
    loadComponent: () => import('./app/another-user.component').then(c => c.AnotherUserComponent),
    title: 'User',
  },
  {
    path: 'image',
    loadComponent: () => import('./app/image.component').then(c => c.ImageComponent),
    title: 'Image',
    canActivate: [() => inject(CanActivateTestService).canActivateObs()]
  },
  {
    path: 'still-image',
    title: 'Image',
    loadComponent: () => import('./app/not-found.component').then(c => c.NotFoundComponent),
    canActivate: [(route: ActivatedRouteSnapshot) => createUrlTreeFromSnapshot(route, ['../image'])]
  },
  {
    path: 'switcher',
    loadComponent: () => import('./app/switcher.component').then(c => c.SwitcherComponent),
    title: 'Switcher',
    loadChildren: () => import('./app/switcher.router').then(r => r.switcherRouter),
  },
  {
    path: '**',
    loadComponent: () => import('./app/not-found.component').then(c => c.NotFoundComponent),
    title: 'No Found'
  }
];


if (environment.production) {
  enableProdMode();
}

// bootstrapApplication(AppComponent, {providers: [importProvidersFrom(RouterModule.forRoot(routes))]})
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes,
      /**
       * PreloadAllModules - Provides a preloading strategy that preloads all modules as quickly as possible.
       * NoPreloading - Provides a preloading strategy that does not preload any modules.
       */
      withPreloading(NoPreloading),

      /**
       * Enables logging of all internal navigation events to the console.
       * Extra logging might be useful for debugging purposes to inspect Router event sequence.
       */
      // withDebugTracing(),

      /**
       * Disables initial navigation.
       * Use if there is a reason to have more control over when the router starts its initial navigation due to some complex initialization logic.
       */
      // withDisabledInitialNavigation(),

      /**
       * Configures initial navigation to start before the root component is created.
       * The bootstrap is blocked until the initial navigation is complete. This value is required for server-side rendering to work.
       */
      // withEnabledBlockingInitialNavigation(),

      /**
       * Enables customizable scrolling behavior for router navigations.
       *
       * anchorScrolling - When set to 'enabled', scrolls to the anchor element when the URL has a fragment. Anchor scrolling is disabled by default.
       * Anchor scrolling does not happen on 'popstate'. Instead, we restore the position that we stored or scroll to the top.
       *
       * scrollPositionRestoration - Configures if the scroll position needs to be restored when navigating back.
       * 'disabled'- (Default) Does nothing. Scroll position is maintained on navigation.
       * 'top'- Sets the scroll position to x = 0, y = 0 on all navigation.
       * 'enabled'- Restores the previous scroll position on backward navigation, else sets the position to the anchor if one is provided,
       * or sets the scroll position to [0, 0] (forward navigation). This option will be the default in the future.
       */
      // withInMemoryScrolling()

      /**
       * Allows to provide extra parameters to configure Router.
       *
       * canceledNavigationResolution - Configures how the Router attempts to restore state when a navigation is cancelled.
       * 'replace' - Always uses location.replaceState to set the browser state to the state of the router before the navigation started. This means that if the URL of the browser is updated before the navigation is canceled, the Router will simply replace the item in history rather than trying to restore to the previous location in the session history. This happens most frequently with urlUpdateStrategy: 'eager' and navigations with the browser back/forward buttons.
       * 'computed' - Will attempt to return to the same index in the session history that corresponds to the Angular route when the navigation gets cancelled. For example, if the browser back button is clicked and the navigation is cancelled, the Router will trigger a forward navigation and vice versa.
       * Note: the 'computed' option is incompatible with any UrlHandlingStrategy which only handles a portion of the URL because the history restoration navigates to the previous place in the browser history rather than simply resetting a portion of the URL.
       * The default value is replace when not set.
       *
       * onSameUrlNavigation - Define what the router should do if it receives a navigation request to the current URL.Default is ignore, which causes the router ignores the navigation. This can disable features such as a “refresh” button. Use this option to configure the behavior when navigating to the current URL. Default is 'ignore'.
       *
       * paramsInheritanceStrategy - Defines how the router merges parameters, data, and resolved data from parent to child routes. By default ('emptyOnly'), inherits parent parameters only for path-less or component-less routes.
       * Set to 'always' to enable unconditional inheritance of parent parameters.
       * Note that when dealing with matrix parameters, “parent” refers to the parent Route config which does not necessarily mean the “URL segment to the left”. When the Route path contains multiple segments, the matrix parameters must appear on the last segment. For example, matrix parameters for {path: 'a/b', component: MyComp} should appear as a/b;foo=bar and not a;foo=bar/b.
       *
       * urlUpdateStrategy - Defines when the router updates the browser URL. By default ('deferred'), update after successful navigation. Set to 'eager' if prefer to update the URL at the beginning of navigation. Updating the URL early allows you to handle a failure of navigation by showing an error message with the URL that failed.
       */
      // withRouterConfig({})
    ),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy}
  ]
})
