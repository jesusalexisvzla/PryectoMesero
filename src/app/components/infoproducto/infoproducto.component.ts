import { Component, OnInit } from '@angular/core';
import { infoproducto } from "../../components/interfaces/prueba";


@Component({
  selector: 'app-infoproducto',
  templateUrl: './infoproducto.component.html',
  styleUrls: ['./infoproducto.component.css']
})
export class InfoproductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  informacionproducto: infoproducto[] = [
    {
      nombre:"Nachos chico",
      precio: 23,
      categoria: 'Comida',
      descripcion: 'Nachos extra queso'
    },
    {
      nombre:"Nachos chico",
      precio: 23,
      categoria: 'Comida',
      descripcion: 'Nachos extra queso'
    },
    {
      nombre:"Nachos chico",
      precio: 23,
      categoria: 'Comida',
      descripcion: 'Nachos extra queso'
    },
    {
      nombre:"Nachos chico",
      precio: 23,
      categoria: 'Comida',
      descripcion: 'Nachos extra queso'
    },
    {
      nombre:"Nachos chico",
      precio: 23,
      categoria: 'Comida',
      descripcion: 'Nachos extra queso'
    },
    {
      nombre:"Nachos chico",
      precio: 23,
      categoria: 'Comida',
      descripcion: 'Nachos extra queso'
    },
    {
      nombre:"Nachos chico",
      precio: 23,
      categoria: 'Comida',
      descripcion: 'Nachos extra queso'
    },
   
   
  ]

}
