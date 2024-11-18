import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  updateTaskPriority(task: Task, newPriority: 'Low' | 'Medium' | 'High') {
    this.taskService.updateTask(task.id, { priority: newPriority });
  }
}
