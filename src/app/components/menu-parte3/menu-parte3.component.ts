import { Component } from '@angular/core';
import { comida } from "../interfaces/prueba";

@Component({
  selector: 'app-menu-parte3',
  templateUrl: './menu-parte3.component.html',
  styleUrls: ['./menu-parte3.component.css']
})
export class MenuParte3Component{

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