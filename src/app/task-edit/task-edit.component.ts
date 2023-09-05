import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { Task } from '../model/iTask';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {

  tasks: any[] = []
  constructor(private route: ActivatedRoute, private taskService: TaskService, 
              private router: Router) { }

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



  save(){
    this.taskService.updateTask(this.route.snapshot.params['id'], this.tasks).subscribe( data =>{
      this.goToTasks();
    }
    , error => console.log(error));
  }

  goToTasks(){
    this.router.navigate(['/task']);
  }


}
