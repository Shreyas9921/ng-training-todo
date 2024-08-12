// src/app/app-routing.module.ts
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { TaskListComponent } from './components/task-list/task-list.component';
// import { TaskFormComponent } from './components/task-form/task-form.component';

// const routes: Routes = [
//   { path: '', component: TaskListComponent },
//   { path: 'add', component: TaskFormComponent },
//   { path: 'edit/:id', component: TaskFormComponent },
//   { path: '**', redirectTo: '', pathMatch: 'full' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],  // Import RouterModule here
//   exports: [RouterModule]  // Export RouterModule so it can be used throughout the app
// })
// export class AppRoutingModule {}

// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
