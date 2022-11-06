import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'angular-standalone-another-user',
  template: `
    <mat-card>
      <mat-card-title class="title">User Information</mat-card-title>
      <mat-card-content>
        <div class="row">
          <span class="mat-caption">Name: </span> <span class="mat-subtitle">Another User</span>
        </div>
        <div class="row">
          <span class="mat-caption">YouTube, Twitter: </span> <span class="mat-subtitle">@DecodedFrontend</span>
        </div>
        <div class="row">
          <span class="mat-caption">Courses: </span>
          <a href="https://courses.decodedfrontend.io" class="mat-subtitle">https://courses.decodedfrontend.io</a>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
      display: block;
      max-width: 320px;
    }

    .row {
      margin-bottom: 10px;
    }

    .mat-caption {
      opacity: 0.6;
    }

    .title {
      margin-bottom: 20px;
    }

  `],
  standalone: true,
  imports: [MatCardModule]
})
export class AnotherUserComponent {

}