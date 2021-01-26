import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/servicios/servicio.service';
// import { pedidococina } from "../../interfaces/prueba";


@Component({
  selector: 'app-recibidos',
  templateUrl: './recibidos.component.html',
  styleUrls: ['./recibidos.component.css']
})
export class RecibidosComponent implements OnInit{

  constructor(private route:Router, private _service: ServiceService, private _http: HttpClient, private toastr: ToastrService) { }

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
        estatus: "E"
      }
    }
    this._http.get('http://localhost:3000/api/Pedidos?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.productos = datos),
      err => console.log(err);
      console.log(this.productos);
  }

  

    aceptado(s:any){
      this._http.patch('http://localhost:3000/api/Pedidos/' + s, 
      {
        estatus: "P"
      })
      .subscribe(err => console.log(err))
      this.route.navigate(['/cocina/proceso']);
      this.toastr.success("Pedido aceptado.", "Notificación");

    }

    rechazado(s:any){
      this._http.patch('http://localhost:3000/api/Pedidos/' + s, 
      {
        estatus: "R"
      })
      .subscribe(err => console.log(err)) 
      this.toastr.success("Pedido rechazado.", "Notificación");

    }

    

  // pedidos: pedidococina[] = [
  //   {
  //     pedido:1,
  //     producto: "Nachos",
  //     cantidad: 3,
  //     descripcion: "Sin chiles porque me pega chorro y me cago asi que si le echan chiles los ire a pedoreear ",
  //     fecha: '20/10/2020',
  //     hora: '02:30pm'
  //   }
  
  // ]

}
