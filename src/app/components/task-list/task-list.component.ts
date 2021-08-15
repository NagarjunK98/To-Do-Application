import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  pendingTasks: string[] = [];
  completedTasks: string[] = [];

  ngOnInit() {
    if (localStorage.getItem('pendingTasks') === null) {
      this.setTasksDetails('pendingTasks', []);
    } else {
      this.pendingTasks = this.getTasksDetails('pendingTasks');
    }
    if (localStorage.getItem('completedTasks') === null) {
      this.setTasksDetails('completedTasks', []);
    } else {
      this.completedTasks = this.getTasksDetails('completedTasks');
    }
  }

  getTasksDetails(taskType: string) {
    let tasks = localStorage.getItem(taskType);
    let taskList = tasks !== null ? JSON.parse(tasks) : '{}';
    return taskList;
  }

  setTasksDetails(taskType: string, details: string[]) {
    localStorage.setItem(taskType, JSON.stringify(details));
  }

  addTask(taskName: string) {
    this.pendingTasks = this.getTasksDetails('pendingTasks');
    this.pendingTasks.push(taskName);
    this.setTasksDetails('pendingTasks', this.pendingTasks);
    this.taskStatus('Task added to list', 'Close');
  }

  deleteTask(id: number) {
    this.pendingTasks = this.getTasksDetails('pendingTasks');
    let taskName = this.pendingTasks[id];
    this.pendingTasks.splice(id, 1);
    this.setTasksDetails('pendingTasks', this.pendingTasks);
    this.archiveTask(taskName);
    this.taskStatus('Task marked as complete', 'Close');
  }

  archiveTask(taskName: string) {
    this.completedTasks = this.getTasksDetails('completedTasks');
    this.completedTasks.push(taskName);
    this.setTasksDetails('completedTasks', this.completedTasks);
  }

  unarchiveTask(id: number) {
    this.completedTasks = this.getTasksDetails('completedTasks');
    let taskName = this.completedTasks[id];
    this.completedTasks.splice(id, 1);
    this.setTasksDetails('completedTasks', this.completedTasks);
    this.addTask(taskName);
  }

  archiveDelete(id: number) {
    this.completedTasks = this.getTasksDetails('completedTasks');
    this.completedTasks.splice(id, 1);
    this.setTasksDetails('completedTasks', this.completedTasks);
    this.taskStatus('Task deleted', 'Close');
  }

  taskStatus(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }
}
