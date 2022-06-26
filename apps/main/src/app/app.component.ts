import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'angular-standalone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, RouterModule]
})
export class AppComponent {
  title = 'main';
}
