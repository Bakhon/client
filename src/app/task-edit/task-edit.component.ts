import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {
  id!: number;
  tasks!: Task;
  form!: FormGroup;
  constructor(private route: ActivatedRoute, private taskService: TaskService, 
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getTaskById()
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }

  
  private getTaskById(){
    this.taskService.getTaskById(this.route.snapshot.params['id']).subscribe(data => {
      this.tasks =  data //Object.values(data)
      });
  }


  submit(){
    this.taskService.updateTask(this.id, this.form.value).subscribe((res:any) => {
         console.log('Task updated successfully!');
         alert('Задача успешно обновлена')
    })
  }


  goToTasks(){
    this.router.navigate(['/task']);
  }


}

export class Task {
  id: number = 0;
  title: string = "";
  description: string = "";
  status: string = "";
  created_at: string = ""
}
