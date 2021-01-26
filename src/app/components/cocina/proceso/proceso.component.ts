import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css']
})
export class ProcesoComponent {

  constructor(private route:Router, private _http: HttpClient) {
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
        estatus: "P"
      }
    }
    this._http.get('http://localhost:3000/api/Pedidos?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.productos = datos),
      err => console.log(err);
      console.log(this.productos);
  }

  
  cancelar(s:any){
    this._http.patch('http://localhost:3000/api/Pedidos/' + s, 
    {
      estatus: "E"
    })
    .subscribe(err => console.log(err)) 
    this.route.navigate(['/cocina/recibidos']);

  }

  finalizar(s:any){
    this._http.patch('http://localhost:3000/api/Pedidos/' + s, 
    {
      estatus: "F"
    })
    .subscribe(err => console.log(err)) 
    this.route.navigate(['/cocina/finalizados']);

  }


}
