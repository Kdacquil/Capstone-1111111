import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeeinfo',
  standalone: true,
  imports: [CommonModule, RouterModule,  FormsModule, ],
  templateUrl: './employeeinfo.component.html',
  styleUrl: './employeeinfo.component.css'
})
export class EmployeeinfoComponent {
user: any;
      constructor(private router: Router, private elementRef: ElementRef) {}
    
      @Input() collapsed = false;
      @Input() screenWidth = 0;
      @ViewChild('accountContainer') accountContainer!: ElementRef;
      showAccount = false;
    
      toggleAccount(event: Event) {
        event.stopPropagation(); 
        this.showAccount = !this.showAccount;
      }
      openAccountSettings() {
        console.log('Open Account Settings');
      }
      logout() {
        console.log('Logout');
        this.router.navigate(['/loginandsignup']);
      }
      @HostListener('document:click', ['$event'])
      closePopups(event: Event) {
        if (this.accountContainer) {
          const clickedInsideAccount = this.accountContainer.nativeElement.contains(event.target);
    
          if (!clickedInsideAccount) {
            this.showAccount = false;
          }
        }
      }

}
