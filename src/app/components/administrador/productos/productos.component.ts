import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cateogria } from '../../interfaces/prueba';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private route:Router){}

  goNuevoProducto(){
    this.route.navigate(['/administrador/altaproducto']);
  }
  
  goBack(){
    this.route.navigate(['/administrador/']);
  }
  formulario:  FormGroup

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
