import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  title = ''; // Propriété pour le champ Title
  description = ''; // Propriété pour le champ Description
  dueDate = ''; // Propriété pour le champ Due Date
  priority: 'Low' | 'Medium' | 'High' = 'Low'; // Propriété pour le champ Priority

  addTask() {
    console.log('Task Added:', {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority
    });

    this.resetForm(); // Réinitialiser le formulaire après l'ajout
  }

  resetForm() {
    this.title = '';
    this.description = '';
    this.dueDate = '';
    this.priority = 'Low';
  }
}
