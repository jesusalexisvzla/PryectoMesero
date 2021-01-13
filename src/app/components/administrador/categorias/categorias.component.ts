import { Component, Input, OnInit } from '@angular/core';
import { cateogria } from "../../interfaces/prueba";
import { RouterOutlet, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http' 
import {ServiceService} from '../../../servicios/servicio.service'

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit  {
  

  public nombreCategoria : Array<any>[];
  // public nom : string

  constructor(private route:Router, private _http: HttpClient, private _datosAServicio: ServiceService){}
    // DECLARACION DE VARIABLES
    public numeroCategorias;
    categorias = [];

    
    // LO QUE ESTE DENTRO VA A EJECUTARSE UNA VES SE INICIE LA PANTALLA 
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

    // AQUI SE LE ENVIAN LOS DATOS DE ESTA PANTALLAS, LOS REGISTROS AL SERVICIO PORQUE DE ESTA MANERA LOS CONTENDRA PARA CONSULTARLOS EN OTRO COMPONENTE 
      // SE ENVIA EL RESULATDO DE LA CONSULTA GET 
    sendArray(datos) {
      // NOMBRE DE LA VARIABLE DECLARADA EN EL CCONSTRUCTOR 
      this._datosAServicio.setArray(datos);
    }

    actualizar(s:any){
      this.goNuevaCategoria()
      // AQUI SE LE ASIGNA LOS VALORES QUE SE ENVIARAN A LA OTRA PANTALLA, DESDE EL HTML SE ESTA ENVIANDO EL OBJETO SSELECCIONADO Y SE ENVIA TODO EL OBJETO 
      this.sendArray(s);
    }

    eliminar (s:string) {
      this._http.patch('http://localhost:3000/api/Categorias/' + s, 
      {
        estatus: 0
      })
      .subscribe(err => console.log(err)) 
    }
    
    goNuevaCategoria(){
      this.route.navigate(['/administrador/altacategoria']);
      this.sendArray(0);
    }
    
    goBack(){
      this.route.navigate(['/administrador/']);
    }


    
}


