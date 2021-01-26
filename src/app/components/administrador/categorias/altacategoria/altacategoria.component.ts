import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http' 
import {ServiceService} from '../../../../servicios/servicio.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-altacategoria',
  templateUrl: './altacategoria.component.html',
  styleUrls: ['./altacategoria.component.css']
})
export class AltacategoriaComponent implements OnInit{
  constructor(private route:Router, private _builder:FormBuilder, private _http: HttpClient, private _service: ServiceService, private toastr: ToastrService)
  {
      this.formCategoria = this._builder.group({
      id: [''],
      nombre: ['', Validators.required]
    })
    var form = new FormData();
  }
  formCategoria: FormGroup


  public contenidoCategoria: Array<any>;
  // contact: Array<Object>;


  ngOnInit() {
    // AQUI SE LE ASIGNA A UN ARREGLO EL CONTENIDO QUE SE ENVIO DEL OTRO COMPONENTE EN CUANTO CARGA LA PANTALLA, SE DECLARO LA VARIALE EN EL CONSTRUCTOR Y SE 
    // HACE LLAMAR GETARRAY DECLARADO EN EL SERVICIO QUE CONTIENE LA INFORMACION  
    this.contenidoCategoria = this._service.getArray();
    // this.rellenarFormulario(this.contenidoCategoria)
    // this.formCategoria.patchValue(this.contenidoCategoria)
    this.rellenarFormulario(this.contenidoCategoria)

  }

  rellenarFormulario(infoCategoria: any) {
    this.formCategoria.get('id').patchValue(infoCategoria.id);
    this.formCategoria.get('nombre').patchValue(infoCategoria.nombre);
 }


  goBack(){
    this.route.navigate(['/administrador/categorias']);
 
  }
  enviarCategoria(values){
      if(values.nombre == undefined){
        this.toastr.error("Falta el nombre de la categoria", "Notificación",{
          timeOut: 2500
        });
      }else{
        this._http.put('http://localhost:3000/api/Categorias', values)
        .subscribe()   
        this.route.navigate(['/administrador/categorias']); 
        this.toastr.success("Categoria actualizada", "Notificación")
      }
  }
}
