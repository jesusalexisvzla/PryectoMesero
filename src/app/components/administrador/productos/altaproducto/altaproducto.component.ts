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
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      categoriaId: ['', Validators.required],
      descripcion: ['']
    })
  }

  formProducto:  FormGroup

    public numeroCategorias;
    categorias = [];
    public opcionSeleccionado;
    contenidoProducto =[];


  ngOnInit(){
    this.contenidoProducto = this._datosAServicio.getArray();

    this.rellenarFormulario(this.contenidoProducto)

      let filter = {
            where: {
              estatus: 1
            }
          }
          this._http.get('http://localhost:3000/api/Categorias?filter='+ JSON.stringify(filter))
          .subscribe(
            (datos: any[])=> this.categorias = datos),
            err => console.log(err);
     
  }

      
  rellenarFormulario(infoProducto: any) {
    this.formProducto.get('id').patchValue(infoProducto.id);
    this.formProducto.get('nombre').patchValue(infoProducto.nombre);
    this.formProducto.get('precio').patchValue(infoProducto.precio);
    this.formProducto.get('categoriaId').patchValue(infoProducto.categoriaId);
    this.formProducto.get('descripcion').patchValue(infoProducto.descripcion);
 }

  tomarIdCategoria(x:any){
    console.log(x);
  }

  enviarProducto(values: any){
    let aler = ""
    if (values.id != undefined) {
      aler = "Producto actualizado"
    }else{
      aler = "Nuevo producto actualizado"
    }

    if(values.nombre == undefined){
      alert("Falta el nombre")
    }else if (values.precio == undefined) {
      alert("Falta el precio")
    }else if (values.categoriaId == undefined) {
      alert("Falta seleccionar la categoria")
    }else{
      this._http.put('http://localhost:3000/api/Productos', values)
      .subscribe() 
      alert(aler)
      this.route.navigate(['/administrador/productos']); 
    }
  }

  goBack(){
    this.route.navigate(['/administrador/productos']);
  }

  enviar(values){
      console.log(values);
  }

}
