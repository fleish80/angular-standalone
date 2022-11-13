import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'angular-standalone-root',
  template: `
    <mat-toolbar color="primary">
      <span><a routerLink="/" mat-button>Standalone Components Example</a></span>
    </mat-toolbar>

    <nav class="nav">
      <a routerLink="/user" mat-button>User</a>
      <a routerLink="/image" mat-button>Image</a>
      <a routerLink="/still-image" mat-button>Still Image</a>
      <a routerLink="/switcher" mat-button>Switcher</a>
      <a routerLink="/metadata" mat-button>Metadata</a>
    </nav>

    <main class="mat-app-background mat-elevation-z2 content">

      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .content {
      height: calc(100vh - 64px - 40px);
      border-radius: 10px;
      box-sizing: border-box;
      margin: 20px;
      padding: 20px;
    }
  `],
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, RouterLinkWithHref, MatButtonModule],
})
export class AppComponent {
  title = 'main';
}
