import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/ITask.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // Uso de "|":   "task: ITask | undefined;" == "task: ITask = { title="", description="", etc }"
  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask() {
    this.delete.emit(this.task); // Notificamos al componente superior la tarea a eliminar
  }

}
