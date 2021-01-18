import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/servicios/servicio.service';
import { carrito } from '../interfaces/prueba';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private route:Router, private _service: ServiceService) { }

  ngOnInit() {

    this.obtenerLocalStorage()
  }


  productos = [];
  totalPagar : number = 0;
  lett : boolean = false

  obtenerLocalStorage(){
    this.totalPagar=0;
    let localProducts = JSON.parse(localStorage.getItem('idCliente'));
    if (localProducts) {
      this.productos = localProducts;
    }

    for (let x = 0; x < this.productos.length; x++) {
      const element = this.productos[x];
      this.totalPagar = this.totalPagar + element.total

    }
    console.log(this.totalPagar);
  }

  vaciarCarrito(){
    this.productos = null
    localStorage.setItem('idCliente', JSON.stringify(this.productos))
    alert("Carrito vaciado con exito")
    this.totalPagar = 0
  }

  eliminarProducto(s:any){
    
    let localProducts = JSON.parse(localStorage.getItem('idCliente'));
    if (localProducts) {
      this.productos = localProducts;
    }

    for (let x = 0; x < this.productos.length; x++) {
      const element = this.productos[x];

      if (element.producto == s.producto) {

          this.productos.splice(x, 1); // 1 es la cantidad de elemento a eliminar
            console.log(this.productos[x]);
            
          localStorage.setItem('idCliente', JSON.stringify(this.productos))
      }
    }
    this.obtenerLocalStorage()
  }

  goNuevoProducto(){
    this.route.navigate(['/menu']);
  }

}
