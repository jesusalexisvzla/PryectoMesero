import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cateogria } from '../../interfaces/prueba';
import { RouterOutlet, Router } from '@angular/router';
import { ServiceService } from 'src/app/servicios/servicio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  constructor(private route:Router, private _http: HttpClient, private _datosAServicio: ServiceService){}

  
  public numeroCategorias;
    categorias = [];

 
  formulario:  FormGroup

  ngOnInit(){
    let filter = {
      where: {
        estatus: 1
      }
    }
    this._http.get('http://localhost:3000/api/Categorias?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.categorias = datos),
      err => console.log(err);

      this.size()

  }

  // SABER LONGITUD DEL REGISTROS TRAIDOS DE A BASE DE DATOS
  size(){
    let filter = {
      where: {
        estatus: 1
      }
    }
    this._http.get('http://localhost:3000/api/Categorias?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.numeroCategorias = datos.length),
      err => console.log(err);
      console.log(this.numeroCategorias);
  }

  goNuevoProducto(){
    this.route.navigate(['/administrador/altaproducto']);
    this.sendArray(0)
  }

  goProducto(){
    this.route.navigate(['/administrador/productoss']);
  }
  
  goBack(){
    this.route.navigate(['/administrador/']);
  }

  sendArray(datos) {
    this._datosAServicio.setArray(datos);
  }
 
  prueba(s:any){
    console.log(s);
    this.goProducto();
    this.sendArray(s.id)

  }


}
