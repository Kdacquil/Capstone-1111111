import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { LoginandsignupComponent } from './loginandsignup.component';

@Component({
  selector: 'app-loginandsignup',
  templateUrl: './loginandsignup.component.html',
  styleUrls: ['./loginandsignup.component.css']
})
export class HomeComponent implements OnInit {
onSignUp(arg0: string,arg1: string,arg2: string) {
throw new Error('Method not implemented.');
}
passwordFieldType: any;
onLogin(arg0: string,arg1: string) {
throw new Error('Method not implemented.');
}

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    // Access Firebase Analytics
    console.log('Firebase Analytics:', this.firebaseService.analytics);
  }
}



describe('LoginandsignupComponent', () => {
  let component: LoginandsignupComponent;
  let fixture: ComponentFixture<LoginandsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginandsignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginandsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
