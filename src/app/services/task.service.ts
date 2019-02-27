import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api = 'http://localhost:5000/api/v1';


  constructor(
    private http: HttpClient
  ) { }

  getAllTasks() {
    const path = `${this.api}/Values/`;
    return this.http.get<Task[]>(path);
  }

  getTask(id: string) {
    const path = `${this.api}/Values/${id}`;
    return this.http.get<Task>(path);
  }

  createTask(task: Task) {
    const path = `${this.api}/Values`;
    return this.http.post(path, task);
  }

  updateTask(task: Task) {
    const path = `${this.api}/Values/${task.id}`;
    return this.http.put<Task>(path, task);
  }

  deleteTask(id: string) {
    const path = `${this.api}/Values/${id}`;
    return this.http.delete(path);
  }
}
