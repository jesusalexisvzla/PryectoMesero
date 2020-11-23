import { Component, OnInit } from '@angular/core';
import { cateogria } from "../../interfaces/prueba";
import { RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent   {
  constructor(private route:Router){}

  goNuevaCategoria(){
    this.route.navigate(['/administrador/altacategoria']);
  }
  
  goBack(){
    this.route.navigate(['/administrador/']);
  }
  
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


