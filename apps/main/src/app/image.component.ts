import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'angular-standalone-image',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <img class="logo" ngSrc="https://capacitorjs.com/assets/img/solutions/angular.png" ngSrcset="100w,200w" width="432"
         height="240" loading="lazy" priority="false"  alt=""/>
  `,
  styles: []
})
export class ImageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
