import {Title} from '@angular/platform-browser';
import {RouterStateSnapshot, TitleStrategy} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    let title = 'Angular Inject';
    const currentTitle = this.buildTitle(routerState);

    if (currentTitle !== undefined) {
      title = `${title} | ${currentTitle}`;
    }
    this.title.setTitle(title);
  }
}
