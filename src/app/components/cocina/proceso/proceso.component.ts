import { Component, OnInit } from '@angular/core';
import { pedidococina } from "../../interfaces/prueba";

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css']
})
export class ProcesoComponent {

  constructor() { }

  pedidos: pedidococina[] = [
    {
      pedido:1,
      producto: "Nachos",
      cantidad: 3,
      descripcion: "Sin chiles porque me pega chorro y me cago asi que si le echan chiles los ire a pedoreear ",
      fecha: '20/10/2020',
      hora: '02:30pm'
    },
    {
      pedido:2,
      producto: "Nachos",
      cantidad: 3,
      descripcion: "con mucho queso no sean casikes ",
      fecha: '20/10/2020',
      hora: '3:30px' 

    },
    {
      pedido:3,
      producto: "Nachos",
      cantidad: 3,
      descripcion: ":p",
      fecha: '20/10/2020',
      hora: '02:30pm'

    },
    {
      pedido:4,
      producto: "Nachos",
      cantidad: 3,
      descripcion: "Sin chiles",
      fecha: '20/10/2020',
      hora: '02:30pm'

    },
    {
      pedido:5,
      producto: "Nachos",
      cantidad: 3,
      descripcion: "Sin chiles",
      fecha: '20/10/2020',
      hora: '02:30pm'

    },
  
  ]


}
