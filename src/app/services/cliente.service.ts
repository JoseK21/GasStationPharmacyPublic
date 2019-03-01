import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private api = 'http://localhost:5000';
  constructor(
    private http: HttpClient
  ) { }

  getAllCliente() {
    const path = `${this.api}/customers/`;
    return this.http.get<Cliente[]>(path);
  }

  getCliente(id: string) {
    const path = `${this.api}/customers/${id}`;
    return this.http.get<Cliente>(path);
  }

  createCliente(cliente: Cliente) {
    console.log('>>>>' + cliente)
    const path = `${this.api}/customers/new`;
    return this.http.post(path, cliente);
  }

  updateCliente(cliente: Cliente) {
    const path = `${this.api}/customers/${cliente.id}`;
    return this.http.put<Cliente>(path, cliente);
  }

  deleteCliente(id: string) {
    console.log('>>>>' + id)
    const path = `${this.api}/customers/delete/${id}`;
    return this.http.delete(path);
  }
}
