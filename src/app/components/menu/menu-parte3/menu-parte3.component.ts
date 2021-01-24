import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/servicios/servicio.service';
import { comida } from "../../interfaces/prueba";

@Component({
  selector: 'app-menu-parte3',
  templateUrl: './menu-parte3.component.html',
  styleUrls: ['./menu-parte3.component.css']
})
export class MenuParte3Component{

  constructor(private route:Router, private _http: HttpClient , private _datosAServicio: ServiceService) { }


  productoDulces = [];

  ngOnInit() {
    
    let filter = {
      where: {
        categoriaId: "5ff9274dbb63f445285f224d",
        estatus: 1
      }
    }

    this._http.get('http://localhost:3000/api/Productos?filter='+ JSON.stringify(filter)).subscribe((data: any[]) => {
        this.productoDulces = data;
        console.log(this.productoDulces);
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
