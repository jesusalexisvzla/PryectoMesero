import { Component } from '@angular/core';
import { pedido } from "../../interfaces/prueba";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  constructor() { }

  pedidos: pedido[] = [
    {
      pedido:1,
      area: "1",
      silla: "23",
      descripcion: "Tostitos preparados con mucho chamoy"
    },
    {
      pedido:2,
      area: "4",
      silla: "1",
      descripcion: "Nachos con carne"
    },
    {
      pedido:3,
      area: "6",
      silla: "25",
      descripcion: "Coca cola con galletas emperados"
    },
    {
      pedido:4,
      area: "34",
      silla: "34",
      descripcion: "Hot-dog"
    },
    {
      pedido:5,
      area: "12",
      silla: "29",
      descripcion: "5 ultras"
    },
    {
      pedido:6,
      area: "31",
      silla: "11",
      descripcion: "Donas de chocolate"
    }
  ]

}
