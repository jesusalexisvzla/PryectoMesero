import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-productoss',
  templateUrl: './productoss.component.html',
  styleUrls: ['./productoss.component.css']
})
export class ProductossComponent implements OnInit {

  constructor(private route:Router, private _http: HttpClient, private _datosAServicio: ServiceService, private toastr: ToastrService) { }


  public numeroProductos;
  public infoCategoria: Array<any>;
  productos = [];

  ngOnInit() {

    this.infoCategoria = this._datosAServicio.getArray();
    console.log(this.infoCategoria);
    

    let filter = {
      where: {
        categoriaId: this.infoCategoria,
        estatus: 1
      },
      include: ['categoria']
    }
    this._http.get('http://localhost:3000/api/Productos?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.productos = datos),
      err => console.log(err);
      
        this.size(this.infoCategoria)
  }

  size(s:any){
    let filter = {
      where: {
        categoriaId: s,
        estatus: 1
      }
    }
    this._http.get('http://localhost:3000/api/Productos?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.numeroProductos = datos.length),
      err => console.log(err);
      console.log(this.numeroProductos);
      
  }

  eliminar(s:string) {
    this._http.patch('http://localhost:3000/api/Productos/' + s, 
    {
      estatus: 0
    })
    .subscribe(err => console.log(err)) 
    this.route.navigate(['/administrador/productos']);
    this.toastr.success("Producto eliminado.", "Notificación")

  }
  
   goNuevoProducto(){
    this.route.navigate(['/administrador/altaproducto']);
  }

  goBack(){
    this.route.navigate(['/administrador/productos']);
  }

  sendArray(datos) {
    this._datosAServicio.setArray(datos);
  }

  actualizar(s:any){
    this.goNuevoProducto()
    this.sendArray(s);
  }

  // goProductos(){
  //   this.route.navigate(['/administrador/productos']);
  // }

}
