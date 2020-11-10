import { Component } from '@angular/core';
import { comida } from "../interfaces/prueba";

@Component({
  selector: 'app-menu-parte4',
  templateUrl: './menu-parte4.component.html',
  styleUrls: ['./menu-parte4.component.css']
})
export class MenuParte4Component {

  constructor() { }

  // ngOnInit(): void {
  // }

  producto: comida[] = [
    {
      nombre: "pizza",
      precio: 30,
      descripcion: "Rica pizza deliciosa que te encantara muchisimo"
    },
    {
      nombre: "dogo",
      precio: 45,
      descripcion: "Salchicha grande"
    },
    {
      nombre: "dogo",
      precio: 45,
      descripcion: "Salchicha grande"
    },
    {
      nombre: "dogo",
      precio: 45,
      descripcion: "Salchicha grande"
    },
    {
      nombre: "dogo",
      precio: 45,
      descripcion: "Salchicha grande"
    },
    {
      nombre: "dogo",
      precio: 45,
      descripcion: "Salchicha grande"
    }
  ]

}