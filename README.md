## Nombre del Proyecto 
RestauranteAdminGit


## Descripción
Sistema de gestión de administracion de reservas de mesas y de pedidos de un restaurante italiano para aceptarlas o rechazarlas.

## Stack Tecnológico

### Frontend
- Angular 17 - Framework principal de desarrollo
- TypeScript - Lenguaje de programación
- HTML5 & CSS3 - Estructura y estilos
- Bootstrap - Framework de diseño responsive
- Angular Material - Componentes de interfaz de usuario

### Backend
- Node.js - Entorno de ejecución
- Express.js - Framework de servidor
- MongoDB - Base de datos NoSQL
- Mongoose - ODM para MongoDB

### Despliegue
- Frontend: Desplegado en Vercel
- Backend: Desplegado en Vercel
- Base de datos: MongoDB Atlas

## Características Principales

### Gestión de Reservas
- Visualización de todas las reservas pendientes
- Aprobación o rechazo de solicitudes
- Control de disponibilidad de mesas
- Gestión de datos de comensales

### Gestión de Pedidos
- Seguimiento de pedidos en tiempo real
- Sistema de aprobación/rechazo de pedidos
- Control de estado de pedidos
- Gestión de información de entrega

## Requisitos Previos
- Node.js (versión 21.6.1 o superior)
- Angular CLI
- MongoDB Compass
- Express

## Funcionalidad

### Página Principal
- Página donde podemos ver las reservas y los pedidos pendientes de aceptar o rechazar

### Características Adicionales
- Diseño responsive adaptado a todos los dispositivos
- Interfaz intuitiva y fácil de usar

## Instalación y Configuración

### Frontend
```bash
# Clonar el repositorio
git clone https://github.com/andreacb1995/restauranteAdminGit.git

# Navegar al directorio del proyecto
cd RestauranteAdminGit

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve
```

### Backend
```bash
# Clonar el repositorio
git clone https://github.com/Ppm19/backEnd-restauranteGit.git

# Navegar al directorio del backend
cd backEnd-restauranteGit

# Instalar dependencias
npm install

# Iniciar servidor
npm run dev
```

## API Endpoints

### Pedidos
- `GET /pedidos` - Obtener todos los pedidos pendientes de aceptar o rechazar
- `GET /eliminar-pedido` - Eliminar un pedido


  ```typescript
  interface Pedido {
    nombre: string;        // Nombre del pedido (generado automáticamente)
    platos: any[];        // Array de platos seleccionados
    precio: number;       // Precio total del pedido
    estadoReserva: string; // Estado del pedido (por defecto: 'pendiente')
    direccion: string;    // Dirección de entrega
    telefono: string;     // Teléfono de contacto
  }
  ```

### Reservas
- `GET /reservas` - Obtener todas las reservas pendientes de aceptar o rechazar
- `GET /eliminar-reserva` - Eliminar una reserva

  ```typescript
  interface Reserva {
    nombre: string;     // Nombre de la persona que reserva
    fecha: string;      // Fecha de la reserva
    hora: string;       // Hora de la reserva
    ncomensales: number; // Número de comensales
  }
  ```

### Base URL
- Frontend: https://restaurante-admin-git.vercel.app
- Backend: https://back-end-restaurante-git.vercel.app
