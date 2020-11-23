import { Component } from '@angular/core';
import { ventadia } from "../../interfaces/prueba";


@Component({
  selector: 'app-ventadia',
  templateUrl: './ventadia.component.html',
  styleUrls: ['./ventadia.component.css']
})
export class VentadiaComponent {

  constructor() { }
  
  ventasdia: ventadia[] = [
    {
      venta:1,
      descripcion: "Tostitos preparados con mucho chamoy",
      fecha: "23/10/2020",
      precio: 230,
    },
    {
      venta:2,
      descripcion: "Tostitos preparados con mucho chamoy",
      fecha: "23/10/2020",
      precio: 230,
    },
    {
      venta:3,
      descripcion: "Tostitos preparados con mucho chamoy",
      fecha: "23/10/2020",
      precio: 230,
    },
    {
      venta:4,
      descripcion: "Tostitos preparados con mucho chamoy",
      fecha: "23/10/2020",
      precio: 230,
    },
    {
      venta:5,
      descripcion: "Tostitos preparados con mucho chamoy",
      fecha: "23/10/2020",
      precio: 230,
    },
    
  ]



  // prueba( clavee){
  //   // la funcion recibe un valor  y se le asigna a la variabble dentro de la funcion, scoupe de JavaScript invstigalo te va servir
  //   var clave = clavee;

  //   if (clave=='mesero') {
  //     // retorna la funcon setTimeout con lo que tiene dentro, esta funcion se ejecuta despues de 100 milisegundos
  //     return setTimeout(function(){
  //       alert('Bienvenido Mesero')
  //   }, 100)
  // }else if (clave == 'administrador'){
  //       return setTimeout(function(){
  //         alert('Bienvenido Administrador')
  //     }, 100)

  //   }
  // }


}
