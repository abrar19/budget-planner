import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideNavComponent, MatIconModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  lastMonthsIncome = ['January: $2000', 'February: $1500', 'March: $1800'];
  currentMonthIncome = '$2000'

  onIncome(){
    
  }
}
