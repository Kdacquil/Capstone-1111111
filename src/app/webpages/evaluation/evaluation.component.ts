import { Component, AfterViewInit  } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.css'
})
export class EvaluationComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initializeCharts();
  }

  toggleSidebar(): void {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('hidden');
    }
  }

  initializeCharts(): void {
    // User Satisfaction Chart
    new Chart('userSatisfaction', {
      type: 'doughnut',
      data: {
        labels: ['Not at all satisfied', 'Dissatisfied', 'Average', 'Satisfied', 'Completely satisfied'],
        datasets: [{
          data: [5, 10, 20, 30, 35],
          backgroundColor: ['#FF5722', '#FFC107', '#FF9800', '#4CAF50', '#8BC34A']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });

    // HR Efficiency Reports Chart
    new Chart('hrEfficiency', {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Time saved Onboarding',
            data: [20, 30, 50, 70],
            borderColor: '#03A9F4',
            fill: false
          },
          {
            label: 'Time saved Offboarding',
            data: [10, 25, 40, 60],
            borderColor: '#8BC34A',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });

    // Task Completion Rate Chart
    new Chart('taskCompletion', {
      type: 'bar',
      data: {
        labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
        datasets: [
          {
            label: 'Completed',
            data: [40, 50, 60, 70],
            backgroundColor: '#4CAF50'
          },
          {
            label: 'Missed',
            data: [10, 20, 15, 10],
            backgroundColor: '#FFC107'
          },
          {
            label: 'Pending',
            data: [5, 10, 10, 5],
            backgroundColor: '#FF5722'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // System Reliability Data Chart
    new Chart('systemReliability', {
      type: 'polarArea',
      data: {
        labels: ['System Uptime', 'Bug Fix Time', 'Error Rate'],
        datasets: [{
          data: [80, 50, 20],
          backgroundColor: ['#4CAF50', '#FFC107', '#FF5722']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }
} {

}
