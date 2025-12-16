import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  salvar(cliente: Cliente){
    // Lógica para salvar o cliente (ex: enviar para um servidor)
    console.log('cliente:', cliente);
  }
}
