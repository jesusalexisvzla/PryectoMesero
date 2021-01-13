import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { ServiceService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-altaproducto',
  templateUrl: './altaproducto.component.html',
  styleUrls: ['./altaproducto.component.css']
})
export class AltaproductoComponent {
  constructor(private route:Router, private _builder: FormBuilder, private _http: HttpClient, private _datosAServicio: ServiceService)
  {
    this.formProducto = this._builder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      categoriaId: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }

  formProducto:  FormGroup


    public numeroCategorias;
    categorias = [];
    public opcionSeleccionado;

 

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

  tomarIdCategoria(x:any){

    console.log(x);

  }

  enviarProducto(values: any){
    // console.log(infoPoducto);
    this._http.put('http://localhost:3000/api/Productos', values)
    .subscribe() 
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

  goBack(){
    this.route.navigate(['/administrador/productos']);
  }


  enviar(values){
      console.log(values);
  }

}
