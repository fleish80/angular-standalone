import {Directive, Injector, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[angularStandaloneBaz]',
  standalone: true
})
export class BazDirective {

  constructor(private vcr: ViewContainerRef, private tpl: TemplateRef<any>) { }

  ngOnInit() {
    this.vcr.createEmbeddedView(this.tpl, {}, {
      injector: Injector.create({
        providers: [{ provide: '🎁', useValue: '😝' }]
      })
    })
  }

}
