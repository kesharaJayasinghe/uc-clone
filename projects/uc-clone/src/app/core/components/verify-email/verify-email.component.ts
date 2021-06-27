import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'keshJay-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  displayState: number = 0;
  subscription: Subscription | undefined;
  constructor(private data: DataService, public authService: AuthService) { }

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
