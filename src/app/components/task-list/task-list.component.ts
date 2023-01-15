import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/ITask.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task1: ITask = {
    title: "Task1",
    description: "tew",
    completed: false,
    level: Levels.Info
  }

  task2: ITask = {
    title: "Task2",
    description: "tew",
    completed: true,
    level: Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask) {
    alert(`Se procede a eliminar la tarea: ${task.title}`);
  }

}
