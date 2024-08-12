/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

}
*/
// src/app/components/task-form/task-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  // taskForm: FormGroup;
  task: any = {
    title: '',
    description: '',
    completed: false
  };
  taskId: string | null = null;

  constructor(
    // private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    /*
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      completed: [false]
    });
    */
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.taskService.getTask(this.taskId).subscribe((task: any) => {
        // this.taskForm.patchValue(task);
        this.task = task;
      });
    }
  }
  
  onSubmit(taskform : any): void {
    /*if (this.taskForm.valid)*/ 
    if(taskform.valid)
    {
      if (this.taskId) {
        this.taskService.updateTask(this.taskId, /*this.taskForm.value*/ this.task).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.taskService.createTask(/*this.taskForm.value*/this.task).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}
