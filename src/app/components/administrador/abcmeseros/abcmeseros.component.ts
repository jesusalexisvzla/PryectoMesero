import { Component, OnInit } from '@angular/core';
import { infoesero } from "../../../components/interfaces/prueba";
import { RouterOutlet, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-abcmeseros',
  templateUrl: './abcmeseros.component.html',
  styleUrls: ['./abcmeseros.component.css']
})
export class AbcmeserosComponent implements OnInit {
  constructor(private route:Router, private _http: HttpClient, private _datosAServicio: ServiceService){}

  public numeroMeseros;
  meseros = [];

  ngOnInit(){
    let filter = {
      where: {
        estatus: 1
      }
    }
    this._http.get('http://localhost:3000/api/Meseros?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.meseros = datos),
      // this. = this.datos.length
      err => console.log(err);

      this.size()

  }

  size(){
    let filter = {
      where: {
        estatus: 1
      }
    }
    this._http.get('http://localhost:3000/api/Meseros?filter='+ JSON.stringify(filter))
    .subscribe(
      (datos: any[])=> this.numeroMeseros = datos.length),
      err => console.log(err);
  }
  goNuevoMesero(){
    this.route.navigate(['/administrador/altamesero']);
    this.sendArray(0);
  }
  
  goBack(){
    this.route.navigate(['/administrador/']);
  }

  sendArray(datos) {
    this._datosAServicio.setArray(datos);
  }

  actualizar(s:any){
    this.goNuevoMesero()
    this.sendArray(s);
    
  }

  eliminar(s:string) {
    this._http.patch('http://localhost:3000/api/Meseros/' + s, 
    {
      estatus: 0
    })
    .subscribe(err => console.log(err)) 
  }
}
