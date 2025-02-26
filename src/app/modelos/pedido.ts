export interface Pedido {
    _id: number,
    nombre: string,
    platos: {
        nombre: string;
        descripcion: string;
        precio: number;
        _id: string;
      }[];
    direccion:string,
    telefono:string,
    precio: number
}