import { Component,OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http'; 
import { CommonModule } from '@angular/common'; 
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'RestauranteAdminGit';
  
  pedidos: any[] = [];
  reservas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerPedidos();
    this.obtenerReservas();
  }

  obtenerPedidos(): void {
    this.http.get<any[]>('https://back-end-restaurante-git.vercel.app/pedidos').subscribe((data) => {
      this.pedidos = data;
      console.log('Pedidos:', this.pedidos);
    });
  }

  obtenerReservas(): void {

    this.http.get<any[]>('https://back-end-restaurante-git.vercel.app/reservas').subscribe((data) => {
      this.reservas = data;
      console.log('Reservas:', this.reservas);
    });
  }
}

bootstrapApplication(AppComponent);