import { Component, OnInit } from '@angular/core';
import { nacho } from "../../components/interfaces/prueba";


@Component({
  selector: 'app-infoproducto',
  templateUrl: './infoproducto.component.html',
  styleUrls: ['./infoproducto.component.css']
})
export class InfoproductoComponent implements OnInit {

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
