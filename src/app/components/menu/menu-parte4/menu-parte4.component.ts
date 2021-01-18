import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { comida } from "../../interfaces/prueba";

@Component({
  selector: 'app-menu-parte4',
  templateUrl: './menu-parte4.component.html',
  styleUrls: ['./menu-parte4.component.css']
})
export class MenuParte4Component {

  constructor(private route:Router, private _http: HttpClient) { }


  productosAlcohol = [];

  ngOnInit() {
    
    let filter = {
      where: {
        categoriaId: "5fdda80ad959d2496c6dea76",
        estatus: 1
      }
    }

    this._http.get('http://localhost:3000/api/Productos?filter='+ JSON.stringify(filter)).subscribe((data: any[]) => {
        this.productosAlcohol = data;
        console.log(this.productosAlcohol);
    }, (err) => {
        console.log(err);
    });

    
  }
  

}
