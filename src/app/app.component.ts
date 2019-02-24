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


}

/* Para usar la lista de tareas se injecta el
 TaskService y el metodo en el componente que desee.
*/
