import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-loginandsignup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loginandsignup.component.html',
  styleUrls: ['./loginandsignup.component.css']
})
export class LoginandsignupComponent {
  isLoginView: boolean = true;
  passwordFieldType: string = 'password';

  constructor(
    private router: Router,
    private titleService: Title,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  async homepage() {
    this.router.navigate(['/home']);
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  async onLogin(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      if (userCredential.user?.emailVerified) {
        this.router.navigate(['/home']);
      } else {
        alert('Please verify your email before logging in.');
        await this.afAuth.signOut();
      }
    } catch (error: any) {
      alert('Error: ' + error.message);
    }
  }

  async onSignUp(email: string, password: string, fullName: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await userCredential.user?.sendEmailVerification();
      await this.firestore.collection('users').doc(userCredential.user?.uid).set({
        fullName: fullName,
        email: email
      });
      alert('Verification email sent. Please check your inbox.');
      this.isLoginView = true;
    } catch (error: any) {
      alert('Error: ' + error.message);
    }
  }
}