import { Component, OnInit } from '@angular/core';
import { nacho } from '../../interfaces/prueba';

@Component({
  selector: 'app-comprarproducto',
  templateUrl: './comprarproducto.component.html',
  styleUrls: ['./comprarproducto.component.css']
})
export class ComprarproductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nachos: nacho[] = [
    {
      nombre:"Nachos chico"
    },
    {
      nombre:"Nachos medians"
    },
    {
      nombre:"Nachos grandes"
    },
    {
      nombre:"Nachos con carne"
    },
    {
      nombre:"Nachos con carne"
    },
    {
      nombre:"Nachos con carne"
    },
    {
      nombre:"Nachos con carne"
    },
    {
      nombre:"Nachos con carne"
    },
   
  ]
}
