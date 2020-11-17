import { Component, OnInit } from '@angular/core';
import { cateogria } from "../../components/interfaces/prueba";


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent   {

  
  categorias: cateogria[] = [
    {
      nombre: "Comida",
    },
    {
      nombre: "Bebida",
    },
    {
      nombre: "Dulces",
    },
    {
      nombre: "Botana",
    },
    {
      nombre: "Alcohol",
    },
    {
      nombre: "Sushi",
    }
  ]
}


