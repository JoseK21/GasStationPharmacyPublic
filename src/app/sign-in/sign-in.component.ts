import { Component, OnInit } from '@angular/core';
import { ClienteService} from '../services/cliente.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  title = 'GasStationPharmacyPublic';
  work = '';

  constructor(
    private clienteService: ClienteService
  ) {}

  ngOnInit() {
  }

  checkNewUser(value: string, value2: string, value3: string, value4: string, checked: boolean, checked2: boolean, checked3: boolean) {

    if (value === '' || value2 === '' || value3 === '' || value4 === '') {
      alert('Espacios imcompletos');
    } else {

      if (checked.valueOf()) {
        this.work = 'Gerente';
      } else if (checked2.valueOf()) {
        this.work = 'Dependiente';
      } else if (checked3.valueOf()) {
        this.work = 'Farmacéutico';
      }
      alert('Bienvenid@ ' + value + ' su perfil a sido creado exitosamente! ! \n' + this.work.toUpperCase());

      console.log(value + value2 + value3 + value4);
    }
  }



  getAllTasks() {
    this.clienteService.getAllCliente()
      .subscribe(tasks => {
        console.log(tasks);
      });
  }

  getTask() { // Poner atributo de entrada y pasar luego aqui abajo
    this.clienteService.getCliente('1')
      .subscribe(task => {
        console.log(task);
      });
  }

  createCliente(nc: string, n: string, a: string, lr: string, fn: string, t: string, h: string) {
    const cliente = {
      numCedula: nc,
      nombre: n,
      apellido: a,
      lugResidencia: lr,
      fecNacimiento: fn,
      tel: t,
      historia: h,
    };
    console.log(cliente);
    this.clienteService.createCliente(cliente).subscribe((newCliente) => {console.log(newCliente);
    });
  }

  updateCliente() {
    const cliente = {
      numCedula: '301150921',
      nombre: 'Maria',
      apellido: 'Lopez',
      lugResidencia: 'Colombia',
      fecNacimiento: '12-04-1991',
      tel: 'null',
      historia: 'Es una mujer desconocida',
    };
    this.clienteService.updateCliente(cliente)
      .subscribe(todo => {
        console.log(todo);
      });
  }

  deleteCliente(nc: string) {
    this.clienteService.deleteCliente(nc)
      .subscribe((data) => {
        console.log(data);
      });
  }
}

/* Para usar la lista de tareas se injecta el
 TaskService y el metodo en el componente que desee.
*/

