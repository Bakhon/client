import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent {
  
  tasks: any[] = []
  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTaskById()
  }

  
  private getTaskById(){
    console.log('id', this.route.snapshot.params['id'])
    this.taskService.getTaskById(this.route.snapshot.params['id']).subscribe(data => {
      this.tasks =  Object.values(data)
      console.log(this.tasks)
      });
    
    
  }

 
}
