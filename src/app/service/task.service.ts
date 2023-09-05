import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



interface Task {
  id: number,
  name: string,
  description: string,
  status: string,
  created_at?: string
}
@Injectable()
export class TaskService {
  

  private baseURL = "http://localhost:8000/api/tasks";

  constructor(private httpClient: HttpClient) { }

  getListTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL}`);
  }

  getTaskById(id: number): Observable<any>{
    return this.httpClient.get<Task[]>(`${this.baseURL}/${id}`);
  }

  deleteTask(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  updateTask(id: number, task: any[]): Observable<Object>{
    console.log('task', task)
    return this.httpClient.put(`${this.baseURL}/${id}`, task);
  }

}
