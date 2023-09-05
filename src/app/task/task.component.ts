import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})



export class TaskComponent  {

  tasks: any[] = []
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  
  private getTasks(){
    this.taskService.getListTasks().subscribe(data => {
      this.tasks = Object.values(data)
    });
  }

  delete(task_id: number) {
    console.log(task_id)
     this.taskService.deleteTask(task_id).subscribe(data => {
      this.tasks = Object.values(data)
    })
  }
}
