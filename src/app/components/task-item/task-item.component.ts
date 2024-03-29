import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task={} as Task;
  faTimes = faTimes;
  @Output() onDeletTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter

  constructor(){

  }

  onDelete(task: Task) {
    this.onDeletTask.emit(task)
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task)
  }
}
