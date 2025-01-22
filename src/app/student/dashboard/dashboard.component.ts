import { Component } from '@angular/core';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SharedMaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  studentName = 'John Doe'; // Replace with dynamic data
  notifications = [
    { title: 'New Assignment Posted', description: 'Check your class for details.', date: '2025-01-15' },
    { title: 'Exam Reminder', description: 'Quarterly exams start next week.', date: '2025-01-20' },
  ];
}
