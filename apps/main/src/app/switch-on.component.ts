import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-standalone-switch-on',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>switch-on works!</p> `,
  styles: [],
})
export class SwitchOnComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
