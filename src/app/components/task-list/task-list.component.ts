import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  pendingTasksList: string[] = [
    'send an email to project manager on feature enhancements',
    'complete integration work by 3PM',
  ];
  completedTasksList: string[] = [
    'Work on App engine',
    'Research on deployment strategies',
  ];
  constructor() {}
  ngOnInit(): void {}

  addTask(taskName: string) {
    this.pendingTasksList.push(taskName);
  }

  deleteTask(id: number) {
    let taskName = this.pendingTasksList[id];
    this.pendingTasksList.splice(id, 1);
    this.archiveTask(taskName);
  }

  archiveTask(taskName: string) {
    this.completedTasksList.push(taskName);
  }

  unarchiveTask(id: number) {
    let taskName = this.completedTasksList[id];
    this.completedTasksList.splice(id, 1);
    this.addTask(taskName);
  }
}
