import { Component } from '@angular/core';
import { comida } from "../../interfaces/prueba";

@Component({
  selector: 'app-menu-parte2',
  templateUrl: './menu-parte2.component.html',
  styleUrls: ['./menu-parte2.component.css']
})
export class MenuParte2Component {

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
