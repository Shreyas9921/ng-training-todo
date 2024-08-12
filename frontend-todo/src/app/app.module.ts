// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    AppRoutingModule,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    FormsModule,
    AppRoutingModule, // Ensure AppRoutingModule is imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
