import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from './modelos/reserva';
import { Pedido } from './modelos/pedido';

@Injectable({
  providedIn: 'root'
})

export class AdministradorService {

private url = 'https://back-end-restaurante-git.vercel.app';

  constructor(private http: HttpClient) { }

  obtenerReservas() {
    return this.http.get<Reserva[]>(`${this.url}/reservas`);
  }

  obtenerPedidos() {
    return this.http.get<Pedido[]>(`${this.url}/pedidos`);
  }

  confirmarEliminarReserva(reserva: Reserva) {
    return this.http.delete(`${this.url}/eliminar-reserva/${reserva._id}`);
  }
  
  confirmarEliminarPedido(pedido: Pedido) {
    return this.http.delete(`${this.url}/eliminar-pedido/${pedido._id}`);
  }
}
