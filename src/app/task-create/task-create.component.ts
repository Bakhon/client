import { Component, OnInit  } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})



export class TaskCreateComponent {
  form!: FormGroup;

  constructor(private route: ActivatedRoute, private taskService: TaskService, 
              private router: Router) { }

  ngOnInit(): void {
      this.form = new FormGroup({
              title: new FormControl('', [Validators.required]),
              description: new FormControl('', Validators.required),
              status: new FormControl('', Validators.required)
          });
      }

  submit(){
      this.taskService.createTask(this.form.value).subscribe((res:any) => {
            console.log('Task created successfully!');
            //this.goToTasks()
            })
  }

  goToTasks(){
    this.router.navigate(['/task']);
  }

 
}
