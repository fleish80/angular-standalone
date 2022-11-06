import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-standalone-not-found',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>not-found works!</p> `,
  styles: [],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
