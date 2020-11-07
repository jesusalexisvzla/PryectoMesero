import { Component } from '@angular/core';
import { comida } from "../interfaces/prueba";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

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
