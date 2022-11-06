import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {ToastService} from 'apps/main/src/app/toast.service';

@Component({
  selector: 'angular-standalone-switch-on',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <p>switch-on works!</p>
    <button mat-button color="primary" (click)="openToast()">Open toast</button>
  `,
  styles: [],
})
export class SwitchOnComponent {

  toastService = inject(ToastService);

  openToast() {
    this.toastService.open('toast text');
  }
}
