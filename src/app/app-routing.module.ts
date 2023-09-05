import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'task', pathMatch: 'full' },
  { path: 'task', component: TaskComponent },
  { path: 'task/:id', component: TaskViewComponent},
  { path: 'task/edit/:id', component: TaskEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
