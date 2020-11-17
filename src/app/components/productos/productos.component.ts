import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cateogria } from '../interfaces/prueba';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  formulario:  FormGroup

  constructor()  {  }

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
