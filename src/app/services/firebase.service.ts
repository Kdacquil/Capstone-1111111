import { Injectable } from '@angular/core';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app: any;
  analytics: any;

  constructor() {
    // Initialize Firebase using environment configuration
    this.app = initializeApp(environment.firebase);
    this.analytics = getAnalytics(this.app);
  }
}