import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'keshJay-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  displayState: number = 0;
  isLoggedIn: boolean = false;
  subscription: Subscription | undefined;
  loginStatus: boolean | undefined;

  constructor(
    private data: DataService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.data.currentDisplayState.subscribe(displayState => this.displayState = displayState);
    this.subscription = this.data.currentIsLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.isLoggedIn = this.authService.isLoggedIn;
    this.data.changeDisplayState(1);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  loginBtnFunc() {
    this.loginStatus = this.authService.isLoggedIn;
    if (this.loginStatus) {
      this.authService.SignOut();
      this.data.changeDisplayState(1);
      location.reload();
    } else if (!this.loginStatus) {
      this.data.changeDisplayState(2);
    }
  }

}
