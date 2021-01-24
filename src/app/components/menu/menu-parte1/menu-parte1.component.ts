import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { ServiceService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-menu-parte1',
  templateUrl: './menu-parte1.component.html',
  styleUrls: ['./menu-parte1.component.css']
})
export class MenuParte1Component implements OnInit {

  constructor(private route:Router, private _http: HttpClient, private _datosAServicio: ServiceService){}


   productoComidas = [];
    ngOnInit() {

      let filter = {
        where: {
          categoriaId: "5fdd7b3dd959d2496c6dea71",
          estatus: 1
        }
      }
  
      this._http.get('http://localhost:3000/api/Productos?filter='+ JSON.stringify(filter)).subscribe((data: any[]) => {
          this.productoComidas = data;
          console.log(this.productoComidas);
      }, (err) => {
          console.log(err);
      });

      
    }

    sendArray(datos) {
      // NOMBRE DE LA VARIABLE DECLARADA EN EL CCONSTRUCTOR 
      this._datosAServicio.setArray(datos);
    }

  goProducto(s:any){
    this.route.navigate(['/comprar']);
    this.sendArray(s);
  }

 

}


