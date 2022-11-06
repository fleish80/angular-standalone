import {Component} from '@angular/core';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'angular-standalone-switcher',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref, MatButtonModule],
  template: `
    <nav class="nav">
      <a routerLink="on" mat-button>ON</a>
      <a routerLink="off" mat-button>OFF</a>
    </nav>
    <router-outlet></router-outlet>`,
  styles: [],
})
export class SwitcherComponent {

}
