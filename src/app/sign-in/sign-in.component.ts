import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor() { }
  work = '';

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
}
