
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'keshJay-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  displayState: number | undefined;   // 1-home, 2-sign-in, 3-sign-up, 4-verify-email, 5-forgot password
  subscription: Subscription | undefined;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentDisplayState.subscribe(displayState => this.displayState = displayState);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
