import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'keshJay-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
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

  openSignIn() {
    this.data.changeDisplayState(2);
  }

}
