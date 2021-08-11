import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasksList: string[] = ["send an email to manju on solution 2.0", "complete integration work by 3PM"];
  constructor() { }
  temp: Number[] =[1,2,3];
  ngOnInit(): void {
  }
  addTask(taskName: string) {
    this.tasksList.push(taskName);
    console.log(this.tasksList.length)
  }
}
