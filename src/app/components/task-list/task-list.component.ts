import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  pendingTasksList: string[] = [
    'send an email to project manager on feature enhancements',
    'complete integration work by 3PM',
  ];
  completedTasksList: string[] = [
    'Work on App engine',
    'Research on deployment strategies',
  ];

  addTask(taskName: string) {
    this.pendingTasksList.push(taskName);
    this.taskStatus('Task added to list', 'Close');
  }

  deleteTask(id: number) {
    let taskName = this.pendingTasksList[id];
    this.pendingTasksList.splice(id, 1);
    this.archiveTask(taskName);
    this.taskStatus('Task marked as complete', 'Close');
  }

  archiveTask(taskName: string) {
    this.completedTasksList.push(taskName);
  }

  unarchiveTask(id: number) {
    let taskName = this.completedTasksList[id];
    this.completedTasksList.splice(id, 1);
    this.addTask(taskName);
  }

  taskStatus(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }
}
