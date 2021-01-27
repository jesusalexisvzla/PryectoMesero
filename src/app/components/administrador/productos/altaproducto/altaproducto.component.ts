import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { AnyNaptrRecord } from 'dns';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-altaproducto',
  templateUrl: './altaproducto.component.html',
  styleUrls: ['./altaproducto.component.css']
})
export class AltaproductoComponent {
  constructor(private route:Router, private _builder: FormBuilder, private _http: HttpClient, private _datosAServicio: ServiceService , private toastr: ToastrService)
  {
    this.formProducto = this._builder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      categoriaId: [''],
      descripcion: ['']
    })
  }

  formProducto:  FormGroup

    public numeroCategorias;
    categorias = [];
    public opcionSeleccionado;
    contenidoProducto =[];
    producto =[];
    prueba = true;


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
     
              this.productos()
  }

  productos(){
    
    let filter = {
      where: {
        estatus: 1
      }
    }
    this._http.get('http://localhost:3000/api/Productos?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.producto = datos),
      err => console.log(err);
  }

  seleccion(values: any){

    let data = {
      id:this.opcionSeleccionado,
      "subproducto": [ {
        nombre: values.nombre,
        precio: values.precio,
        descricpion: values.descripcion,
      }
      ]
    }
    
    if(values.nombre == undefined){
      this.toastr.error("Falta el nombre", "Notificación",{
        timeOut: 2500
      });
    }else if (values.precio == undefined) {
      this.toastr.error("Falta el precio", "Notificación",{
        timeOut: 2500
      });
    }else{
      this._http.patch('http://localhost:3000/api/Productos', data)
      .subscribe() 
      this.route.navigate(['/administrador/productos']);
      this.toastr.success("Subproducto agregado.", "Notificación")
    }

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
      aler = "Producto actualizado."
    }else{
      aler = "Nuevo producto agregado."
    }

    if(values.nombre == undefined){
      this.toastr.error("Falta el nombre", "Notificación",{
        timeOut: 2500
      });
    }else if (values.precio == undefined) {
      this.toastr.error("Falta el precio", "Notificación",{
        timeOut: 2500
      });
    }else if (values.categoriaId == undefined) {
      this.toastr.error("Falta seleccionar la categoria", "Notificación",{
        timeOut: 2500
      });
    }else{
      this._http.put('http://localhost:3000/api/Productos', values)
      .subscribe() 
      this.route.navigate(['/administrador/productoss']);
      this.toastr.success(aler, "Notificación")
      this.sendArray(values.categoriaId)
    }
  }

  sendArray(datos) {
    this._datosAServicio.setArray(datos);
  }

  goBack(){
    this.route.navigate(['/administrador/productos']);
  }

  enviar(values){
      console.log(values);
  }

}
