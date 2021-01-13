import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-productoss',
  templateUrl: './productoss.component.html',
  styleUrls: ['./productoss.component.css']
})
export class ProductossComponent implements OnInit {

  constructor( private _http: HttpClient, private _datosAServicio: ServiceService) { }


  public numeroProductos;
  productos = [];

  ngOnInit() {
    let filter = {
      where: {
        // precio: "50"
        categoriaId: "5fdd7b3dd959d2496c6dea71",
        estatus: 1
      },
      include: ['categoria']
    }
    this._http.get('http://localhost:3000/api/Productos?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.productos = datos),
      err => console.log(err);
      

      this.size()
  }

  size(){
    let filter = {
      where: {
        categoriaId: "5fdd7b3dd959d2496c6dea71",
        estatus: 1

      }
    }
    this._http.get('http://localhost:3000/api/Productos?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.numeroProductos = datos.length),
      err => console.log(err);
  }

  eliminar(s:string) {
    this._http.patch('http://localhost:3000/api/Productos/' + s, 
    {
      estatus: 0
    })
    .subscribe(err => console.log(err)) 
  }

}
