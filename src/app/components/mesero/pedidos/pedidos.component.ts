import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { pedido } from "../../interfaces/prueba";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{

  constructor(private _http: HttpClient) { }
  ngOnInit() {
    this.traerProducto()
  }

  fechaFormato(s:any){
    return s = moment(s).format('LT');
  }
  horaFormato(s:any){
    return s = moment(s).add(10, 'days').calendar(); ;
  }
  productos = [];
  traerProducto(){
    let filter = {
      where: {
        estatus: "F"
      }
    }
    this._http.get('http://localhost:3000/api/Pedidos?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.productos = datos),
      err => console.log(err);
      console.log(this.productos);
  }


 entregado(s:any){
  this._http.patch('http://localhost:3000/api/Pedidos/' + s, 
  {
    estatus: "E"
  })
  .subscribe(err => console.log(err)) 
}
}
