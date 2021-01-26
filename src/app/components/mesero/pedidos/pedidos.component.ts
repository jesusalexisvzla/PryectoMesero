import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit{

  constructor(private route: Router, private _http: HttpClient, private toastr: ToastrService) { }
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
  this.route.navigate(['/mesero/ventas']);
  this.toastr.success("Pedido entregado.", "Notificación");
}
}
