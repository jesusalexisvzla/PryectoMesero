import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ServiceService } from 'src/app/servicios/servicio.service';
// import { carrito } from '../interfaces/prueba';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private route:Router, private _service: ServiceService, private _http: HttpClient) { }

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

  
  fecha = new Date();

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
    alert("Pedido realizado con exito");
    
    
  }

  // pedidos=[]

  // preuba(){
  //   // this.pedidos = []
  //   // localStorage.setItem('idCliente', JSON.stringify(this.pedidos))



  //   // let localProducts = JSON.parse(localStorage.getItem('token'));

  //   // let data = {
  //   //   claveCliente: "pene",
  //   //   "pedido": [  
  //   //     this.productos
  //   //   ]
  //   // }
  // }


  // traerProducto(){
  //   let filter = {
  //     where: {
  //       id: "6009f0d46ee9b8304c15f446"
  //     }
  //   }
  //   this._http.get('http://localhost:3000/api/Pedidos?filter='+ JSON.stringify(filter))
  //   .subscribe(
  //     (datos: any[])=> this.prueba = datos),
  //     err => console.log(err);
            
  //     var fechaPedido = this.prueba[0].createdAt;
  //     var hora = moment(fechaPedido).format('LT');
  //     var fecha = moment(fechaPedido).format('LL'); 

  //     console.log(hora);
  //     console.log(fecha);
      
  // }


  
 

  

}
