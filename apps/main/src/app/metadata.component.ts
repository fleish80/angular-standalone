import {Component, EventEmitter, Input, Output, reflectComponentType} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'angular-standalone-metadata',
  standalone: true,
  imports: [CommonModule],
  template: `
  <pre>{{mirror | json}}</pre>
  `,
  styles: [],
})
export class MetadataComponent {

  @Input() inputA!: string;
  @Input('aliasB') inputB!: string;

  @Output() eventA = new EventEmitter();
  @Output('aliasEvent') eventB = new EventEmitter();

  mirror = reflectComponentType(MetadataComponent)!;


}
