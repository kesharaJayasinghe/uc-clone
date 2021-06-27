import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'keshJay-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  displayState: number = 0;
  subscription: Subscription | undefined;

  constructor(private data: DataService, public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.data.currentDisplayState.subscribe(displayState => this.displayState);
  }

  googleAuth() {
    this.authService.GoogleAuth();
  }

  navigateHome() {
    this.data.changeDisplayState(1);
  }

  openSignUp() {
    this.data.changeDisplayState(3);
  }

  openForgotPasswordForm() {
    this.data.changeDisplayState(5);
  }

}
