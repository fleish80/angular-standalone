import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'angular-standalone-switch-on',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <p>switch-on works!</p>
  `,
  styles: [],
})
export class SwitchOnComponent {

}
