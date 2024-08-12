/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

}
*/
// src/app/components/task-list/task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks: any) => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task._id !== id);
    });
  }

  editTask(taskId: string): void {
    this.router.navigate(['/edit', taskId]);
  }

}
