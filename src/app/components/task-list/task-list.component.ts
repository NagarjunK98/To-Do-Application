import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasksList: string[] = [
    'send an email to manju on solution 2.0',
    'complete integration work by 3PM',
  ];
  id: any;
  constructor() {}
  ngOnInit(): void {}

  addTask(taskName: string) {
    this.tasksList.push(taskName);
  }

  deleteTask(id: number) {
    console.log('deleted task id: ', id);
    console.log('Task name is: ', this.tasksList[id]);
    this.tasksList.splice(id, 1);
  }
}
