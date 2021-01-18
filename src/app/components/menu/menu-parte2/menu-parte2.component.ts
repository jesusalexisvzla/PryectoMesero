import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { comida } from "../../interfaces/prueba";

@Component({
  selector: 'app-menu-parte2',
  templateUrl: './menu-parte2.component.html',
  styleUrls: ['./menu-parte2.component.css']
})
export class MenuParte2Component implements OnInit {

  constructor(private route:Router, private _http: HttpClient) { }


  productoBebidas = [];

  ngOnInit() {
    
    let filter = {
      where: {
        categoriaId: "5ffa29301553510d2caf848e",
        estatus: 1
      }
    }

    this._http.get('http://localhost:3000/api/Productos?filter='+ JSON.stringify(filter)).subscribe((data: any[]) => {
        this.productoBebidas = data;
        console.log(this.productoBebidas);
    }, (err) => {
        console.log(err);
    });

    
  }

 
 

}
