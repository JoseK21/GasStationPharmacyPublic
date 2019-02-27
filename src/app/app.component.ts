import { Component } from '@angular/core';
import { TaskService} from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GasStationPharmacyPublic';

  constructor(
    private taskService: TaskService
  ) {}

  getAllTasks() {
    this.taskService.getAllTasks()
      .subscribe(tasks => {
        console.log(tasks);
      });
  }

  getTask() { // Poner atributo de entrada y pasar luego aqui abajo
    this.taskService.getTask('1')
      .subscribe(task => {
        console.log(task);
      });
  }

  createTask() {
    const task = {
      id: 21,
      numCedula: 'string',
      nombre: 'string',
      apellido: 'string',
      lugResidencia: 'string',
      fecNacimiento: 'string',
      tel: 'string',
      historia: 'string',
    };
    this.taskService.createTask(task).subscribe((newTask) => {console.log(newTask);
    });
  }

  updateTask() {
    const task = {
      id: 21,
      numCedula: '301150921',
      nombre: 'Maria',
      apellido: 'Lopez',
      lugResidencia: 'Colombia',
      fecNacimiento: '12-04-1991',
      tel: 'null',
      historia: 'Es una mujer desconocida',
    };
    this.taskService.updateTask(task)
      .subscribe(todo => {
        console.log(todo);
      });
  }

  deleteTask() {
    this.taskService.deleteTask('1')
      .subscribe((data) => {
        console.log(data);
      });
  }
}

/* Para usar la lista de tareas se injecta el
 TaskService y el metodo en el componente que desee.
*/
