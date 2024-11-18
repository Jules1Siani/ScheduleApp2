import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasks.asObservable();

  constructor(private notificationService: NotificationService) {}

  addTask(task: Task) {
    const currentTasks = this.tasks.getValue();
    task.id = currentTasks.length + 1;
    this.tasks.next([...currentTasks, task]);
    this.notificationService.showNotification('Task added successfully!');
  }

  getTasks() {
    return this.tasks$;
  }

  deleteTask(id: number) {
    const updatedTasks = this.tasks.getValue().filter(task => task.id !== id);
    this.tasks.next(updatedTasks);
    this.notificationService.showNotification('Task deleted successfully!');
  }

  updateTask(id: number, updatedTask: Partial<Task>) {
    const tasks = this.tasks.getValue();
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
      this.tasks.next(tasks);
      this.notificationService.showNotification('Task updated successfully!');
    }
  }
}
