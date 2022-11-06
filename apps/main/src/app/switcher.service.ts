import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitcherService {

  constructor() { }

  init() {
    console.log('%cinit switcher service', 'color:green; font-size: 30px');
  }
}
