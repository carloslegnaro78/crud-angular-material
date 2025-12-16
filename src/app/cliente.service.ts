import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = '_CLIENTES';

  constructor() { }

  salvar(cliente: Cliente){
    // Lógica para salvar o cliente (ex: enviar para um servidor)
    console.log('cliente:', cliente);
  }

  obtenerClientes(): Cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(repositorioClientes){
      const cliente: Cliente[] =  JSON.parse(repositorioClientes) as Cliente[];
      return cliente;
    }

    const clientes: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }

}
