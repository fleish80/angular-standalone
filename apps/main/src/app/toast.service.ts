import {
  ApplicationRef,
  createComponent,
  createEnvironmentInjector,
  EnvironmentInjector,
  Injectable,
  Injector
} from '@angular/core';
import {ToastComponent} from './toast.component';

@Injectable({providedIn: 'root'})
export class ToastService {

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {
  }

  open(text: string) {
    const elementInjector = Injector.create({
      providers: [
        {
          provide: 'MyToken',
          useValue: 'Token'
        }
      ],
    });

    /**
     * ModuleInjector(EnvironmentInjector) hierarchy  Configure a ModuleInjector in this hierarchy using an @NgModule() or @Injectable() annotation.
     * ElementInjector hierarchy  Created implicitly at each DOM element. An ElementInjector is empty by default unless you configure it in the providers property on @Directive() or @Component().
     */


    const environmentInjector = createEnvironmentInjector(
      [{
        provide: 'MyToken',
        useValue: 'Token'
      }], this.injector);

    const dialogRef = createComponent(ToastComponent, {
      environmentInjector,
      elementInjector,

      /**
       * We can pass projectableNodes — A list of DOM nodes that should be projected through <ng-content> of the new component instance:
       */
      projectableNodes: [
        // ng-content nodes
        // [dialogContentRef.location.nativeElement],
        // // second ng-content (e.g <ng-content select="footer"></ng-content>)
        // [ footer ]
      ]

    });

    dialogRef.setInput('text', text);

    document.body.appendChild(dialogRef.location.nativeElement);

    // Register the newly created ref using the `ApplicationRef` instance
    // to include the component view into change detection cycles.
    this.appRef.attachView(dialogRef.hostView);
  }

}
