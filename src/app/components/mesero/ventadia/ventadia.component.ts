import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ventadia } from "../../interfaces/prueba";


@Component({
  selector: 'app-ventadia',
  templateUrl: './ventadia.component.html',
  styleUrls: ['./ventadia.component.css']
})
export class VentadiaComponent implements OnInit {

  constructor(private _http : HttpClient) { }

  ngOnInit(){
    this.traerProducto()
  }
  
  fechaFormato(s:any){
    return s = moment(s).format('LT');
  }
  horaFormato(s:any){
    return s = moment(s).add(10, 'days').calendar();
  }
  
  productos = [];
  public montoTotal = 0;
  public cantidad; 

  traerProducto(){
    let filter = {
      where: {
        estatus: "E"
      }
    }
    this._http.get('http://localhost:3000/api/Pedidos?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> {
        this.productos = datos

        for (let x = 0; x < this.productos.length; x++) {
          const element = this.productos[x];
          this.montoTotal = this.montoTotal + parseInt(element.totalPagar)
        }
        this.cantidad = datos.length
      }),
      err => console.log(err);   
  }
 

}
