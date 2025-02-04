import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent implements OnInit {
  sidebarVisible = false;

  toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
  }

  ngOnInit(): void {
      this.initCharts();
  }

  initCharts(): void {
    const taskCompletionCtx = document.createElement('canvas');
    document.getElementById('taskCompletionRate')?.appendChild(taskCompletionCtx);
    new Chart(taskCompletionCtx, {
        type: 'pie',
        data: {
            labels: ['Completed', 'Delayed'],
            datasets: [{
                data: [80, 20],
                backgroundColor: ['#4CAF50', '#FF5722']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true // Disable tooltips if not needed
                },
                // Add a custom plugin for the label inside the chart
                title: {
                    display: true,
                    text: 'Task Completion Chart',
                    position: 'top',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#000'
                }
            }
        }
    });

    const notificationsCtx = document.createElement('canvas');
    document.getElementById('notificationsChart')?.appendChild(notificationsCtx);
    new Chart(notificationsCtx, {
    type: 'bar',
    data: {
        labels: ['Before', 'After'],
        datasets: [{
            label: 'Task Completion Rate',
            data: [70, 95], // Example values
            backgroundColor: ['#FF5722', '#4CAF50']
        }]
    },
    options: {
        plugins: {
            legend: { display: true }
        }
    }
});


const monitoringCtx = document.createElement('canvas');
document.getElementById('monitoringChart')?.appendChild(monitoringCtx);
new Chart(monitoringCtx, {
    type: 'doughnut',
    data: {
        labels: ['With HR Involvement', 'Without'],
        datasets: [{
            data: [85, 15],
            backgroundColor: ['#03A9F4', '#FF9800']
        }]
    }
});



const evaluationCtx = document.createElement('canvas');
document.getElementById('evaluationChart')?.appendChild(evaluationCtx);
new Chart(evaluationCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'], // Example months
        datasets: [{
            label: 'System Efficiency (%)',
            data: [75, 80, 90, 95],
            backgroundColor: '#9C27B0',
            borderColor: '#9C27B0',
            fill: false
        }]
    }
});



    

    const issuesIdentifiedCtx = document.createElement('canvas');
    document.getElementById('issuesIdentified')?.appendChild(issuesIdentifiedCtx);
    new Chart(issuesIdentifiedCtx, {
        type: 'doughnut',
        data: {
            labels: ['Missing Documents', 'Incomplete Submission', 'Clearance Forms'],
            datasets: [{
                data: [60, 30, 20],
                backgroundColor: ['#FF9800', '#03A9F4', '#9C27B0']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true
                },
                title: {
                    display: true,
                    text: 'Issues Identified Chart',
                    position: 'top',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#000'
                }
            }
        }
    });
  }
}
