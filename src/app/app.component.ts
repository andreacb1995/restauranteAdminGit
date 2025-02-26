import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Reserva } from './modelos/reserva';
import { AdministradorService } from './administrador.service';
import { CabeceraAdministradorComponent } from './cabecera-administrador/cabecera-administrador.component';
import { Pedido } from './modelos/pedido';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, HttpClientModule, CommonModule, CabeceraAdministradorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
  providers: [AdministradorService]
})
export class AdministradorComponent implements OnInit {
  title = 'RestauranteAdminGit';

  reserva: Reserva = {
    _id: 0,
    nombre: '',
    fecha: '',
    hora: '',
    ncomensales: 1
  };

  pedido: Pedido = {
    _id: 0,
    nombre: '',
    direccion: '',
    telefono: '',
    platos: [],
    precio: 0
  };

  pedidos: Pedido[] = [];
  reservas: Reserva[] = [];  

  expandedReservaId: number | null = null; 
  expandedPedidoId: number | null = null; 

  constructor(private http: HttpClient, private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.obtenerReservas();
    this.obtenerPedidos();
  }

  obtenerReservas(): void {
    this.administradorService.obtenerReservas().subscribe({
      next: (response: Reserva[]) => {
        this.reservas = response;
      },
      error: (error) => {
        console.error('Error al obtener las reservas:', error);
        alert('Error al obtener las reservas');
      }
    });
  }

  obtenerPedidos(): void {
    this.administradorService.obtenerPedidos().subscribe({
      next: (response: Pedido[]) => {
        this.pedidos = response;
      },
      error: (error) => {
        console.error('Error al obtener las reservas:', error);
        alert('Error al obtener las reservas');
      }
    });
  }

  toggleReserva(id: number): void {
    this.expandedReservaId = this.expandedReservaId === id ? null : id;
  }

  togglePedido(id: number): void {
    this.expandedPedidoId = this.expandedPedidoId === id ? null : id;
  }
  
  confirmarEliminarReserva(reserva: Reserva) {
    this.administradorService.confirmarEliminarReserva(reserva).subscribe({
      next: () => {
        this.reservas = this.reservas.filter(r => r._id !== reserva._id);
      },
      error: (error) => {
        console.error('Error al confirmar la reserva:', error);
      }
    });
  }
  
  confirmarEliminarPedido(pedido: Pedido) {
    this.administradorService.confirmarEliminarPedido(pedido).subscribe({
      next: () => {
        this.pedidos = this.pedidos.filter(r => r._id !== pedido._id);
      },
      error: (error) => {
        console.error('Error al confirmar el pedido:', error);
      }
    });
  }
}
