import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/servicios/servicio.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor(private _router: Router, private _location: Location, private _builder:FormBuilder, private _http: HttpClient, private _service: ServiceService)
  {
      this.formCategoria = this._builder.group({
      name: ['']
    })
    var form = new FormData();
  }
  formCategoria: FormGroup


  ngOnInit(): void {
    // this.traerImagen()
  }

  // foto = []
  // imagen=""

  subirImagen(values: any){
    console.log(values);
         this._http.post('http://localhost:3000/api/localContainers/fotos/upload', values)
        .subscribe() 
  }


















      // this._http.put('http://localhost:3000/api/localContainers//fotos/upload', values)
      //   .subscribe() 
      // foto = [];
  // traerImagen(){
  //   let filter = {
  //     where: {
  //       container: "fotos",
  //       file: "categoria.png"
  //     }
  //   }
  //   this._http.get('http://localhost:3000/api/localContainers?filter='+ JSON.stringify(filter))
  //   .subscribe(
  //     (datos: any[])=> this.foto = datos),
  //     err => console.log(err);
  // }

  // enviarCategoria(values){
  //   if(values.nombre == undefined){
  //     this.toastr.error("Falta el nombre de la categoria", "Notificación",{
  //       timeOut: 2500
  //     });
  //   }else{
  //     this._http.put('http://localhost:3000/api/Categorias', values)
  //     .subscribe()   
  //     this.route.navigate(['/administrador/categorias']); 
  //     this.toastr.success("Categoria actualizada", "Notificación")
  //   }
// }

}
