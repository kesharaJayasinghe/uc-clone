import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'keshJay-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private data: DataService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  navigateHome() {
    this.data.changeDisplayState(1);
  }

}
