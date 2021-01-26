import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/servicios/servicio.service';
// import { carrito } from '../interfaces/prueba';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private route:Router, private _service: ServiceService, private _http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
    this.token = this._service.recibeTokenCliente();

    console.log(this.token);
    
    this.obtenerLocalStorage()
  }

  token = [];
  prueba = [];
  productos = [];
  totalPagar : number = 0;
  lett : boolean = false

  obtenerLocalStorage(){
    this.totalPagar = 0;
    let localProducts = JSON.parse(localStorage.getItem('idCliente'));
    if (localProducts) {
      this.productos = localProducts;
      

    }

    for (let x = 0; x < this.productos.length; x++) {
      const element = this.productos[x];
      this.totalPagar = this.totalPagar + element.total
      this.prueba.push({
        instruccion: this.productos[x].instruccion
      }) 
    }
    console.log(this.totalPagar);
    console.log(this.prueba);
  }

  vaciarCarrito(){
    this.productos = null
    localStorage.setItem('idCliente', JSON.stringify(this.productos))
    this.totalPagar = 0
    this.toastr.success("carrito vaciado.", "Notificación");

  }

  eliminarProducto(s:any){
    
    let localProducts = JSON.parse(localStorage.getItem('idCliente'));
    if (localProducts) {
      this.productos = localProducts;
    }

    for (let x = 0; x < this.productos.length; x++) {
      const element = this.productos[x];

      if (element.producto == s.producto) {

          this.productos.splice(x, 1); 
            console.log(this.productos[x]);
            
          localStorage.setItem('idCliente', JSON.stringify(this.productos))
      }
    }
    this.toastr.success("Producto eliminado.", "Notificación");

    this.obtenerLocalStorage()
  }

  goNuevoProducto(){
    this.route.navigate(['/menu']);
  }

  
  realizarCompra(s: any){
    let infoCliente = JSON.parse(localStorage.getItem('tokenCliente'));

   let data = {
    area: infoCliente[0].area,
    fila: infoCliente[0].fila,
    noAciento: infoCliente[0].noAciento,
    totalPagar: s,
    "pedido": [  
      this.productos
    ]
  }
    this._http.put('http://localhost:3000/api/Pedidos', data)
    .subscribe() 
    console.log(data);

    this.productos = []
    this.totalPagar = 0
    localStorage.setItem('idCliente', JSON.stringify(this.productos))
    this.route.navigate(['/menu']);
    this.toastr.success("Pedido realizado.", "Notificación");
    
    
  }


}
