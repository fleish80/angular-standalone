import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-standalone-switch-off',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>switch-off works!</p> `,
  styles: [],
})
export class SwitchOffComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
