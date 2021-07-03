import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import firebase from 'firebase';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
import * as firebase1 from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  displayState: number = 0;
  subscription: Subscription | undefined;
  userCollection: AngularFirestoreCollection<any> = this.afs.collection('users');

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private data: DataService
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })
  }

  ngOnInit(): void {
    this.subscription = this.data.currentDisplayState.subscribe(displayState => this.displayState);
  }

  navigateHome() {
    this.data.changeDisplayState(1);
  }

  openVerifyEmail() {
    this.data.changeDisplayState(4);
  }

  async SignIn(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        this.navigateHome();
      });
      if (result.user)
        this.SetUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }

  async SignUp(email: string, password: string, fullName: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.SendVerificationMail();
      if (result.user)
       await this.SetUserData(result.user);
        this.addUserInfo(result.user != null ? result.user.uid : '', fullName);
    } catch (error) {
      window.alert(error.message);
    }
  }

  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u?.sendEmailVerification())
      .then(() => {
        this.openVerifyEmail();
      })
  }

  async ForgotPassword(passwordResetEmail: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent, check your inbox.');
    } catch (error) {
      window.alert(error);
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null && user.emailVerified !== undefined && user.emailVerified !== false) ? true : false;
  }

  async AuthLogin(provider: any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      this.ngZone.run(() => {
        this.router.navigate(['home']);
      });
      if (result.user)
        this.SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }

  SetUserData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      emailVerified: user.emailVerified
    }
    this.data.changeIsLoggedIn(user.emailVerified);
    return userRef.set(userData, {
      merge: true
    })
  }

  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.navigateHome();
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  addUserInfo(uid: string, fullName: string) {
    this.userCollection.doc(uid).set({
      fullName: fullName,
      createdAt: firebase1.default.firestore.Timestamp.now(),
      userRole: 0
    })
      .catch((error) => {
        console.log(error);
      })
  }

}
