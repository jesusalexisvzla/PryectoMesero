import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { comida } from "../../interfaces/prueba";

@Component({
  selector: 'app-menu-parte1',
  templateUrl: './menu-parte1.component.html',
  styleUrls: ['./menu-parte1.component.css']
})
export class MenuParte1Component {

  constructor(private route:Router){}

  goProducto(){
    this.route.navigate(['/comprar']);
  }

  // ngOnInit(): void {
  // }

  producto: comida[] = [
    {
      nombre: "Pizza",
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

    alerta() {
    alert('hola')
  }

}
