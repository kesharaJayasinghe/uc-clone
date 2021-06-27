import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private displayStateSource = new BehaviorSubject(0);
  private isLoggedInSource = new BehaviorSubject(false);

  currentDisplayState = this.displayStateSource.asObservable();
  currentIsLoggedIn = this.isLoggedInSource.asObservable();

  constructor() { }

  changeDisplayState(displayState: number) {
    this.displayStateSource.next(displayState);
  }

  changeIsLoggedIn(isLoggedIn: boolean) {
    this.isLoggedInSource.next(isLoggedIn);
  }
}
