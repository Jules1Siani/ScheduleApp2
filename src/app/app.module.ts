import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PriorityBadgeComponent } from './priority-badge/priority-badge.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PriorityBadgeComponent,
    AddTaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, // Ajouter CommonModule ici
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
