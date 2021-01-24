import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
// import { pedidococina } from "../../interfaces/prueba";

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(){
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


  // pedidos: pedidococina[] = [
  //   {
  //     pedido:1,
  //     producto: "Nachos",
  //     cantidad: 3,
  //     descripcion: "Sin chiles porque me pega chorro y me cago asi que si le echan chiles los ire a pedoreear ",
  //     fecha: '20/10/2020',
  //     hora: '02:30pm'
  //   },
  //   {
  //     pedido:2,
  //     producto: "Nachos",
  //     cantidad: 3,
  //     descripcion: "con mucho queso no sean casikes ",
  //     fecha: '20/10/2020',
  //     hora: '3:30px' 

  //   },
  //   {
  //     pedido:3,
  //     producto: "Nachos",
  //     cantidad: 3,
  //     descripcion: ":p",
  //     fecha: '20/10/2020',
  //     hora: '02:30pm'

  //   },
  //   {
  //     pedido:4,
  //     producto: "Nachos",
  //     cantidad: 3,
  //     descripcion: "Sin chiles",
  //     fecha: '20/10/2020',
  //     hora: '02:30pm'

  //   },
  //   {
  //     pedido:5,
  //     producto: "Nachos",
  //     cantidad: 3,
  //     descripcion: "Sin chiles",
  //     fecha: '20/10/2020',
  //     hora: '02:30pm'

  //   },
  
  // ]

}
