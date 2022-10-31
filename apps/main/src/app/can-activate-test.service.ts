import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateTestService {

  canActivate(): boolean {
    return true;
  }

  canActivateObs(): Observable<boolean> {
    return of(true);
  }
}
